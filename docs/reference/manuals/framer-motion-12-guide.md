# Framer Motion 12 Guide

**Package**: framer-motion@12.38.0  
**Documentation**: https://www.framer.com/motion  
**Used For**: Scroll animations, page transitions, interactive effects

---

## Core Concepts

### Motion Component

Regular HTML tag → Motion tag by adding `motion.`:

```tsx
<div> → <motion.div>
<h1>  → <motion.h1>
<p>   → <motion.p>
```

Motion components accept animation props:

```tsx
<motion.div
  initial={{ opacity: 0 }}        // Starting state
  animate={{ opacity: 1 }}        // Target state
  transition={{ duration: 0.5 }}  // How to animate
>
  Content
</motion.div>
```

---

## Most-Used APIs

### 1. Scroll Animations (whileInView)

**Animate when element scrolls into view**

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  This fades in and slides up when scrolled into view
</motion.div>
```

**Parameters:**
- `initial` - Starting state (hidden)
- `whileInView` - Target state (visible)
- `viewport={{ once: true }}` - Animate only once
- `transition` - Animation speed and easing

### 2. Hover Effects

**Animate on hover**

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

**Common hover effects:**
```tsx
whileHover={{ 
  scale: 1.1,                    // Grow 10%
  backgroundColor: "#violet",    // Change color
  boxShadow: "0 0 20px #violet"  // Add glow
}}
```

### 3. Exit Animations

**Animate when component unmounts**

```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      Modal content
    </motion.div>
  )}
</AnimatePresence>
```

**Usage**: Used in FAQ collapse/expand in Consultation.tsx

### 4. Gesture Recognition

**Detect user interactions**

```tsx
<motion.button
  onHoverStart={() => console.log("hover started")}
  onHoverEnd={() => console.log("hover ended")}
  onTapStart={() => console.log("tap started")}
  onTap={() => console.log("tapped")}
>
  Interactive button
</motion.button>
```

### 5. Variants

**Reusable animation definitions**

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
  <motion.div variants={itemVariants}>Item 3</motion.div>
</motion.div>
```

**Benefit**: Define animations once, reuse everywhere.

---

## Animation Properties

### Transform

```tsx
<motion.div animate={{ 
  x: 100,           // Translate 100px right
  y: 50,            // Translate 50px down
  scale: 1.5,       // Grow 50%
  rotate: 45,       // Rotate 45 degrees
  opacity: 0.5,     // 50% transparent
}} />
```

### Colors

```tsx
<motion.div animate={{ 
  color: "#fff",              // Text color
  backgroundColor: "#violet", // Background
  borderColor: "#purple",     // Border
}} />
```

### Transitions

```tsx
transition={{
  duration: 0.5,              // Total time (seconds)
  delay: 0.1,                 // Wait before starting
  ease: "easeInOut",          // Easing function
  repeat: 2,                  // Repeat 2 times
  repeatType: "reverse",      // Reverse direction each repeat
}}
```

**Easing options:**
- `"linear"`
- `"easeIn"`, `"easeOut"`, `"easeInOut"`
- `"circIn"`, `"circOut"`, `"circInOut"`
- `"backIn"`, `"backOut"`, `"backInOut"`

---

## Practical Examples

### Staggered Grid Animation

```tsx
// In Services.tsx
{services.map((service, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}  // Each card delays 0.1s
  >
    {service.content}
  </motion.div>
))}
```

**Effect**: Cards slide in one after another (cascade effect).

### FAQ Collapse/Expand

```tsx
// In FAQ.tsx
<AnimatePresence>
  {openIndex === index && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-slate-300 mt-4">{faq.answer}</p>
    </motion.div>
  )}
</AnimatePresence>
```

### Hero Section Cascade

```tsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Title
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Subtitle
</motion.p>
```

---

## Performance Tips

### Use transforms, not style properties

✅ **Good** (GPU accelerated):
```tsx
<motion.div animate={{ x: 100, scale: 1.5 }} />
```

❌ **Bad** (CPU intensive):
```tsx
<motion.div animate={{ left: "100px", width: "300px" }} />
```

### Use `once: true` for scroll animations

```tsx
whileInView={{ animate: true }}
viewport={{ once: true }}  // ← Important for performance
```

Prevents re-animation when scrolling back.

### Keep animations under 1 second for scroll

```tsx
// Good: fast, doesn't delay scroll experience
transition={{ duration: 0.5 }}

// Bad: slow, feels unresponsive
transition={{ duration: 2 }}
```

---

## Do's and Don'ts

| ✅ Do | ❌ Don't | Why |
|------|---------|-----|
| Use transform properties (x, y, scale) | Animate width/height | Transforms use GPU |
| Set `once: true` for scroll animations | Omit (re-animates on scroll) | Saves performance |
| Use `duration: 0.5-0.8s` for scroll | `duration: 2+s` | Users scroll past slow animations |
| Use `delay` for stagger effects | Animate all items at once | Cascade feels more dynamic |
| Use `variants` for repeated patterns | Copy animation code | DRY principle |
| Use `AnimatePresence` for unmounting | Omit (no exit animation) | Smooth visual feedback |

---

## Common Easing Functions

```tsx
// Smooth, natural
transition={{ ease: "easeInOut" }}

// Bouncy, playful
transition={{ ease: "backOut" }}

// Swift, snappy
transition={{ ease: "easeOut" }}

// Careful, building
transition={{ ease: "easeIn" }}
```

---

## Browser Support

- Chrome/Edge: ✓ Full support
- Firefox: ✓ Full support
- Safari: ✓ Full support
- IE11: ✗ Not supported (transforms not GPU-accelerated)

---

## Links

- **Official Docs**: https://www.framer.com/motion
- **API Reference**: https://www.framer.com/docs/reference
- **Examples**: https://www.framer.com/motion/examples
- **React Integration**: https://react.dev/

---

**Version**: 12.38.0  
**Last Updated**: 2026-04-24  
**Used By**: All major sections (Hero, Services, FAQ, Testimonials)
