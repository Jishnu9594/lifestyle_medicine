"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { useRouter } from "next/navigation";

export function LifestyleMedicineSection() {
  const router = useRouter();

  const pillars = [
    {
      icon: "🥗",
      title: "Optimal Nutrition",
      description:
        "Eat more whole foods and focus on minimally processed, plant-predominant, nutrient-dense meals and snacks.",
      color: "primary",
    },
    {
      icon: "🏃",
      title: "Physical Activity",
      description:
        "Move every day and incorporate strength, flexibility, and aerobic activities into your routine.",
      color: "orange",
    },
    {
      icon: "🧘",
      title: "Stress Management",
      description:
        "Develop healthy coping skills to meet the ever-changing demands of life and bolster resilience.",
      color: "blue",
    },
    {
      icon: "😴",
      title: "Restorative Sleep",
      description:
        "Create the right conditions to get 7-9 hours of quality sleep every night to allow the body to reset and recover.",
      color: "purple",
    },
    {
      icon: "💝",
      title: "Connectedness",
      description:
        "Foster supportive relationships and build connections that bring meaning and purpose to life.",
      color: "pink",
    },
    {
      icon: "🚫",
      title: "Risky Substance Avoidance",
      description:
        "Avoid behaviors that include the consumption of or exposure to harmful substances.",
      color: "green",
    },
  ];

  const colorMap: {
    [key: string]: { border: string; bg: string; hover: string };
  } = {
    primary: {
      border: "border-primary-100",
      bg: "bg-gradient-to-br from-primary-400 to-primary-600",
      hover: "hover:border-primary-300",
    },
    orange: {
      border: "border-orange-100",
      bg: "bg-gradient-to-br from-orange-400 to-orange-600",
      hover: "hover:border-orange-300",
    },
    blue: {
      border: "border-blue-100",
      bg: "bg-gradient-to-br from-blue-400 to-blue-600",
      hover: "hover:border-blue-300",
    },
    purple: {
      border: "border-purple-100",
      bg: "bg-gradient-to-br from-purple-400 to-purple-600",
      hover: "hover:border-purple-300",
    },
    pink: {
      border: "border-pink-100",
      bg: "bg-gradient-to-br from-pink-400 to-pink-600",
      hover: "hover:border-pink-300",
    },
    green: {
      border: "border-green-100",
      bg: "bg-gradient-to-br from-green-400 to-green-600",
      hover: "hover:border-green-300",
    },
  };

  return (
    <Section
      spacing="lg"
      className="bg-gradient-to-r from-primary-50 to-orange-50"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <FadeIn delay={0.2}>
            <div>
              <div className="inline-block bg-gradient-to-r from-primary-600 to-orange-500 px-6 py-2 rounded-full text-white text-sm font-semibold mb-6">
                UNDERSTANDING
              </div>
              <h2 className="heading-1 mb-6">
                What is{" "}
                <span className="bg-gradient-to-r from-primary-600 to-orange-500 bg-clip-text text-transparent">
                  Lifestyle Medicine?
                </span>
              </h2>
              <p className="text-body text-lg mb-6 leading-relaxed">
                Lifestyle medicine is the{" "}
                <span className="font-semibold text-text">
                  evidence-based medical specialty
                </span>{" "}
                that treats root causes with therapeutic lifestyle
                interventions. It is how clinicians restore patient health and
                reignite their joy of practice.
              </p>
              <p className="text-body text-lg mb-8 leading-relaxed">
                Grounded in six interconnected pillars, lifestyle medicine
                treats, reverses, and prevents chronic conditions like{" "}
                <span className="font-semibold">
                  type 2 diabetes, obesity, cardiovascular disease
                </span>{" "}
                and more.
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => router.push("/courses")}
              >
                Learn More
              </Button>
            </div>
          </FadeIn>

          {/* Right Content - Pillars Grid */}
          <FadeIn delay={0.3}>
            <div className="space-y-4">
              {pillars.map((pillar, index) => {
                const colors = colorMap[pillar.color] || colorMap.primary;
                return (
                  <div
                    key={index}
                    className={`group bg-white rounded-xl p-6 border ${colors.border} ${colors.hover} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center text-white font-bold text-lg`}
                      >
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="heading-4 text-text mb-2">
                          {pillar.title}
                        </h3>
                        <p className="text-muted text-sm">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
