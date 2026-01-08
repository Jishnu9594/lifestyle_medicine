# Hero Section - Device-Specific Images Update

## Overview

The hero section now displays different images based on device size:

- **Mobile/Tablet**: Doctor image layered on background
- **Desktop**: Woman image layered on background

---

## 📱 Mobile/Tablet Experience (< 1024px)

### Image Stack

```
Container (h-96 to h-[500px])
├── Background Image (absolute)
│   └── /2b6e5d83-58e5-4d74-99cd-eff31ed9c09b-removebg-preview.png
│   └── Height: 75% (mobile) to 80% (tablet)
│   └── Animation: imageFloat (3s)
│
└── Foreground Image (relative, on top)
    └── /doctor-with-his-arms-crossed-white-background-removebg-preview.png
    └── Height: 100% (mobile) to 80% (tablet)
    └── Animation: imageFloat (3s, delay 0.5s)
```

### Mobile Layout

```
┌────────────────────────────┐
│   TEXT CONTENT (100%)      │
│   ────────────────────     │
│   • Badge                  │
│   • Heading                │
│   • Buttons                │
│   • Stats                  │
├────────────────────────────┤
│   IMAGES (h-96, 384px)     │
│   ────────────────────     │
│   [Background Image]       │
│   [Doctor Image on top]    │
└────────────────────────────┘
```

### Tablet Layout

```
┌────────────────────────────┐
│   TEXT CONTENT (100%)      │
│   ────────────────────     │
│   • Badge                  │
│   • Heading                │
│   • Buttons                │
│   • Stats                  │
├────────────────────────────┤
│   IMAGES (h-[500px], 500px)│
│   ────────────────────     │
│   [Background Image - 80%] │
│   [Doctor Image - 80%]     │
└────────────────────────────┘
```

---

## 🖥️ Desktop Experience (≥ 1024px)

### Image Stack

```
Container (h-full, full screen height)
├── Background Image (absolute)
│   └── /2b6e5d83-58e5-4d74-99cd-eff31ed9c09b-removebg-preview.png
│   └── Height: 100%
│   └── Animation: imageFloat (3s)
│
└── Foreground Image (relative, on top)
    └── /young-lady-looking-pointing-copy-space-removebg-preview.png
    └── Height: 100%
    └── Animation: imageFloat (3s, delay 0.5s)
```

### Desktop Layout

```
┌──────────────────────────────────────────┐
│  TEXT (50%)   │    IMAGES (50%, h-full)  │
│  ───────────  │    ──────────────────    │
│  • Badge      │    [Background Image]    │
│  • Heading    │    [Woman Image on top]  │
│  • Buttons    │                          │
│  • Stats      │    (Full height, 100%)   │
│               │                          │
└──────────────────────────────────────────┘
```

---

## 🔧 Technical Implementation

### Image Visibility Control

```tsx
{
  /* MOBILE/TABLET: Doctor with Background Image */
}
<div className="lg:hidden absolute inset-0 flex items-center justify-center">
  {/* Background Image - 75% (mobile) to 80% (tablet) */}
  <img
    src="/2b6e5d83-58e5-4d74-99cd-eff31ed9c09b-removebg-preview.png"
    className="absolute h-3/4 sm:h-4/5 object-contain animate-imageFloat"
  />

  {/* Foreground Image (Doctor) - 100% (mobile) to 80% (tablet) */}
  <img
    src="/doctor-with-his-arms-crossed-white-background-removebg-preview.png"
    className="relative h-full sm:h-4/5 object-contain animate-imageFloat"
    style={{ animationDelay: "0.5s" }}
  />
</div>;

{
  /* DESKTOP: Woman with Background Image */
}
<div className="hidden lg:flex absolute inset-0 items-center justify-center">
  {/* Background Image - 100% */}
  <img
    src="/2b6e5d83-58e5-4d74-99cd-eff31ed9c09b-removebg-preview.png"
    className="absolute h-full object-contain animate-imageFloat"
  />

  {/* Foreground Image (Woman) - 100% */}
  <img
    src="/young-lady-looking-pointing-copy-space-removebg-preview.png"
    className="relative h-full object-contain animate-imageFloat"
    style={{ animationDelay: "0.5s" }}
  />
</div>;
```

---

## 📊 Image Comparison

### Mobile/Tablet (< 1024px)

| Element    | Image       | Height   | Animation              |
| ---------- | ----------- | -------- | ---------------------- |
| Background | 2b6e5d83... | 75%-80%  | imageFloat (3s)        |
| Foreground | Doctor      | 100%-80% | imageFloat (3s, +0.5s) |

### Desktop (≥ 1024px)

| Element    | Image       | Height | Animation              |
| ---------- | ----------- | ------ | ---------------------- |
| Background | 2b6e5d83... | 100%   | imageFloat (3s)        |
| Foreground | Woman       | 100%   | imageFloat (3s, +0.5s) |

---

## 🎨 Responsive Heights

### Container Heights

| Breakpoint | Class        | Height | Use Case        |
| ---------- | ------------ | ------ | --------------- |
| Mobile     | h-96         | 384px  | Initial mobile  |
| Tablet     | sm:h-[500px] | 500px  | 640px+ screens  |
| Desktop    | lg:h-full    | 100vh  | 1024px+ screens |

### Image Heights (Mobile/Tablet)

| Device                | Background     | Foreground (Doctor) |
| --------------------- | -------------- | ------------------- |
| Mobile (< 640px)      | h-3/4 (75%)    | h-full (100%)       |
| Tablet (640px-1024px) | sm:h-4/5 (80%) | sm:h-4/5 (80%)      |

### Image Heights (Desktop)

| Device             | Background    | Foreground (Woman) |
| ------------------ | ------------- | ------------------ |
| Desktop (≥ 1024px) | h-full (100%) | h-full (100%)      |

---

## ✨ Features

✅ **Device-Specific Images**: Different images for mobile and desktop
✅ **Layered Effect**: Both images create depth
✅ **Responsive Sizing**: Proper heights for each device
✅ **Smooth Animations**: Floating effect on both images
✅ **Optimized**: Doctor image for mobile, Woman for desktop
✅ **Full Responsive**: Mobile, Tablet, Desktop support

---

## 🎯 Image Details

### Mobile/Tablet Images

1. **Background Image**: 2b6e5d83-58e5-4d74-99cd-eff31ed9c09b-removebg-preview.png
   - Generic lifestyle/health background
   - Slightly smaller (75%-80%)
2. **Foreground Image**: doctor-with-his-arms-crossed-white-background-removebg-preview.png
   - Professional doctor pose
   - Larger (80%-100%)
   - Represents professional expertise

### Desktop Images

1. **Background Image**: 2b6e5d83-58e5-4d74-99cd-eff31ed9c09b-removebg-preview.png
   - Generic lifestyle/health background
   - Full height (100%)
2. **Foreground Image**: young-lady-looking-pointing-copy-space-removebg-preview.png
   - Engaging woman pointing
   - Full height (100%)
   - Represents wellness/lifestyle

---

## 🔄 Display Logic

### Conditional Rendering

```
Mobile/Tablet View:
├── Show: Doctor image section (lg:hidden)
├── Hide: Woman image section (hidden)

Desktop View:
├── Hide: Doctor image section (lg:hidden)
├── Show: Woman image section (hidden lg:flex)
```

---

## 📱 Breakpoints Used

| Breakpoint  | Size    | Applies To                |
| ----------- | ------- | ------------------------- |
| Base/Mobile | < 640px | Doctor images             |
| sm (small)  | 640px   | Doctor images (h reduced) |
| lg (large)  | 1024px  | Switches to Woman images  |

---

## ✅ Verification Checklist

- ✅ No TypeScript errors
- ✅ Mobile shows doctor image
- ✅ Desktop shows woman image
- ✅ Both images properly layered
- ✅ Responsive heights working
- ✅ Animations smooth on all devices
- ✅ Images responsive to screen size
- ✅ Proper z-index stacking
- ✅ All content visible
- ✅ Ready for production

---

## 🚀 Ready for Production

**Status**: ✅ Complete
**Tested**: Mobile, Tablet, Desktop
**Responsive**: All breakpoints
**Animated**: Smooth floating effects
**Professional**: Device-optimized images
