"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { leadAPI } from "@/lib/api";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<any | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Fetch leads on mount
  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await leadAPI.getAll(0, 1000);
      setLeads(response.data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    if (filter === "all") return true;
    return lead.source === filter;
  });

  const sources = [...new Set(leads.map((lead) => lead.source))];

  const stats = {
    total: leads.length,
    today: leads.filter((lead) => {
      const leadDate = new Date(lead.created_at);
      const today = new Date();
      return leadDate.toDateString() === today.toDateString();
    }).length,
    contact: leads.filter((lead) => lead.source === "contact").length,
    course: leads.filter((lead) => lead.source === "course").length,
  };

  const handleExport = () => {
    const csv = [
      ["ID", "Name", "Email", "Phone", "Source", "Message", "Date"].join(","),
      ...filteredLeads.map((lead) =>
        [
          lead.id,
          `"${lead.name}"`,
          lead.email,
          lead.phone || "N/A",
          lead.source,
          `"${(lead.message || "").replace(/"/g, '""')}"`,
          new Date(lead.created_at).toLocaleString(),
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen overflow-hidden bg-gradient-to-br from-primary-50 to-white">
        <Section spacing="lg">
          <Container>
            <h1 className="heading-1 mb-2 gradient-text">Admin - Leads Dashboard</h1>
            <p className="text-body text-muted mb-12">
              View and manage all leads from your website
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card hover className="p-6 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">{stats.total}</div>
                <div className="text-muted">Total Leads</div>
              </Card>
              <Card hover className="p-6 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">{stats.today}</div>
                <div className="text-muted">Today</div>
              </Card>
              <Card hover className="p-6 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">{stats.contact}</div>
                <div className="text-muted">Contact Form</div>
              </Card>
              <Card hover className="p-6 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">{stats.course}</div>
                <div className="text-muted">Course Enrollments</div>
              </Card>
            </div>

            {/* Filter and Export */}
            <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    filter === "all"
                      ? "bg-primary-500 text-white"
                      : "border-2 border-primary-200 text-primary-600 hover:bg-primary-50"
                  }`}
                >
                  All Leads
                </button>
                {sources.map((source) => (
                  <button
                    key={source}
                    onClick={() => setFilter(source)}
                    className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                      filter === source
                        ? "bg-primary-500 text-white"
                        : "border-2 border-primary-200 text-primary-600 hover:bg-primary-50"
                    }`}
                  >
                    {source.charAt(0).toUpperCase() + source.slice(1)}
                  </button>
                ))}
              </div>
              <button
                onClick={handleExport}
                className="px-6 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
              >
                📥 Export CSV
              </button>
            </div>

            {/* Leads List */}
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted text-lg">Loading leads...</p>
              </div>
            ) : filteredLeads.length === 0 ? (
              <Card className="text-center py-12">
                <p className="text-muted text-lg">No leads found</p>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredLeads.map((lead) => (
                  <Card
                    key={lead.id}
                    hover
                    className="p-6 cursor-pointer transition-all"
                    onClick={() =>
                      setSelectedLead(selectedLead?.id === lead.id ? null : lead)
                    }
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="heading-3">{lead.name}</h3>
                          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                            {lead.source.toUpperCase()}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm">
                            <span className="font-semibold">Email:</span>{" "}
                            <a
                              href={`mailto:${lead.email}`}
                              className="text-primary-500 hover:underline"
                            >
                              {lead.email}
                            </a>
                          </p>
                          {lead.phone && (
                            <p className="text-sm">
                              <span className="font-semibold">Phone:</span>{" "}
                              <a
                                href={`tel:${lead.phone}`}
                                className="text-primary-500 hover:underline"
                              >
                                {lead.phone}
                              </a>
                            </p>
                          )}
                          <p className="text-xs text-muted">
                            {new Date(lead.created_at).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-2xl transition-transform ${
                            selectedLead?.id === lead.id ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </div>
                    </div>

                    {/* Expanded Message */}
                    {selectedLead?.id === lead.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold mb-3">Message:</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-muted whitespace-pre-wrap">{lead.message}</p>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <a
                            href={`mailto:${lead.email}`}
                            className="flex-1 px-4 py-2 rounded-lg bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors text-center"
                          >
                            Reply via Email
                          </a>
                          {lead.phone && (
                            <a
                              href={`https://wa.me/${lead.phone.replace(/[^\d]/g, "")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors text-center"
                            >
                              WhatsApp
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
