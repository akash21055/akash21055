# ADR-004: Type Safety (TypeScript Strict Mode)

**Status:** Accepted  
**Date:** 2026-04-24  
**Decision Maker:** Development Team

---

## Context

JavaScript is dynamically typed, which allows:
- Rapid prototyping (no type annotations)
- High flexibility (any value in any variable)

But causes problems at scale:
- Silent bugs (wrong type passed, no error until runtime)
- Poor IDE autocomplete (can't infer property names)
- Refactoring fear (change function signature, break unknown callers)
- Onboarding friction (what shape is this object?)

**TypeScript adds optional static typing**, catching errors at **compile-time** instead of **runtime**.

**Decision**: Use TypeScript with:
1. **Strict mode** (no implicit `any`, strict null checks)
2. **Strict mode disabled** (faster prototyping, less type overhead)
3. **NoCheck mode** (just use JavaScript, type-comment style)

---

## Decision

**Adopted: TypeScript 6 with Strict Mode Enabled**

**Configuration (tsconfig.json):**
```json
{
  "compilerOptions": {
    "strict": true,           // Enable all strict checks
    "noImplicitAny": true,    // Require explicit type on all variables
    "strictNullChecks": true, // null/undefined separate type
    "target": "ES2017",       // Transpile to modern JavaScript
    "module": "esnext"        // Use ES modules
  }
}
```

**Rationale:**
1. **Catch bugs early** - Type errors found at compile, not in production
2. **Better IDE support** - Autocomplete knows exact property names
3. **Refactoring safety** - Rename function, TypeScript finds all callers
4. **Self-documenting** - Types explain what shape data should be
5. **Small team** - Types reduce need for communication (code documents itself)

---

## Rationale

### Bug Prevention

**Example: Catching a Type Error**

Without strict TypeScript:
```javascript
// data is any type - could be number, string, object, etc
function displayZodiacSign(data) {
  return `Sign: ${data.name}`; // Crash at runtime if data doesn't have .name
}

displayZodiacSign(123); // No compile error, but crashes: 123 is number, not object
```

With TypeScript strict:
```typescript
interface Zodiac {
  name: string;
  symbol: string;
}

function displayZodiacSign(data: Zodiac) {
  return `Sign: ${data.name}`; // Compile-time error if called with wrong type
}

displayZodiacSign(123); // ❌ TypeScript error: 123 is not Zodiac type
```

**Benefit**: Error caught during development, not by users in production.

### IDE Autocomplete

Without types:
```javascript
const zodiac = fetchZodiacData();
zodiac.??? // IDE doesn't know what properties exist
```

With strict types:
```typescript
const zodiac: Zodiac = fetchZodiacData();
zodiac.??? // IDE shows: .name, .symbol, .dates (autocomplete works)
```

**Benefit**: Faster coding, fewer typos, IDE helps with refactoring.

### Refactoring Safety

**Scenario**: Change form submission signature
```typescript
// Old
function handleSubmit(formData: FormData) { ... }

// New - add userId parameter
function handleSubmit(userId: string, formData: FormData) { ... }

// TypeScript finds all 3 callers and errors:
// ❌ Consultation.tsx:120: Missing required parameter 'userId'
// ❌ ContactForm.tsx:45: Missing required parameter 'userId'  
// ❌ tests/form.test.ts:89: Missing required parameter 'userId'
```

Without TypeScript, missing parameter at one call site = silent bug.

### Self-Documenting Code

```typescript
// Props interface documents what data component expects
interface ConsultationFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  initialService?: string;
  isLoading?: boolean;
}

function ConsultationForm({ onSubmit, initialService, isLoading }: ConsultationFormProps) {
  // Documentation built into code, not in README
}
```

**Benefit**: New developers understand component API from types, not trial-and-error.

### Small Team Productivity

TypeScript replaces some need for:
- Code reviews (types catch issues)
- Documentation (types document API)
- Testing (types prevent classes of bugs)

**ROI**: Upfront typing investment pays off in fewer bugs and faster refactoring.

---

## Alternatives Considered

### Option 1: Disable Strict Mode

**Pros:**
- Faster initial development (skip types)
- More flexible (any type works)
- Lower learning curve for JS-only developers

**Cons:**
- Silent bugs possible (type mismatches not caught)
- Poor IDE support (no autocomplete)
- Refactoring harder (must manually track changes)
- Tech debt accumulates (easier to type poorly than refactor later)

**Verdict:** Rejected; benefits of strict mode outweigh initial friction.

### Option 2: JavaScript + JSDoc Comments

**Pros:**
- No compile step (faster)
- Flexibility of JavaScript
- Some IDE support from JSDoc

**Cons:**
- Type checking not enforced (can ignore comments)
- IDE support is incomplete
- Comments go stale (not validated)
- More verbose than TypeScript

**Verdict:** Rejected; TypeScript provides better tooling and validation.

### Option 3: No Types (Pure JavaScript)

**Pros:**
- Fastest to write initially
- No learning curve
- Most flexibility

**Cons:**
- Silent bugs in production
- Painful refactoring
- Poor IDE support
- Hiring candidates must be careful writers

**Verdict:** Rejected; marketing site success depends on reliability.

---

## Consequences

### Positive

✅ **Catch bugs early** - Type errors at compile-time, not production  
✅ **IDE intelligence** - Autocomplete, refactoring, inline docs  
✅ **Refactoring confidence** - TypeScript catches all affected code  
✅ **Self-documenting** - Types explain API without external docs  
✅ **Scalability** - Strict types prevent bugs as codebase grows  
✅ **Team communication** - Types reduce need for back-and-forth  

### Negative

⚠️ **Initial setup**: Configuration and learning curve  
⚠️ **Type annotations**: Some verbosity (must annotate all functions)  
⚠️ **Build time**: TypeScript compilation adds ~2-5 seconds  
⚠️ **Any type trap**: Easy to use `any` and bypass type safety  

### Neutral

◌ **Third-party libraries**: Some libraries have incomplete types (@types/ packages)  
◌ **React prop passing**: Can be verbose for deeply nested components  

---

## Implementation

### Current Setup

**tsconfig.json - Strict Mode**
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnest"],
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "skipLibCheck": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Typing Components

**Function Component with Props:**
```typescript
interface HeroProps {
  title?: string;
  subtitle: string;
}

export default function Hero({ title = "Default", subtitle }: HeroProps) {
  return <h1>{title}</h1>;
}
```

**Form State:**
```typescript
interface FormData {
  name: string;
  email: string;
  service: "birth-chart" | "compatibility" | "guidance" | "horoscope";
}

const [formData, setFormData] = useState<FormData>({...});
```

### Type Gradual Adoption

If migrating existing code:
1. Enable strict mode (TypeScript errors show up)
2. Add `// @ts-ignore` for intentional violations (temporary)
3. Fix types incrementally (high-value files first)
4. Remove `@ts-ignore` comments

---

## TypeScript Best Practices

### ✅ DO: Use Type Interfaces

```typescript
interface ConsultationFormProps {
  onSubmit: (data: FormData) => Promise<void>;
}
```

### ❌ DON'T: Use `any` type

```typescript
// Bad - defeats purpose of TypeScript
function handleData(data: any) { ... }
```

### ✅ DO: Use Union types for limited options

```typescript
type ZodiacSign = "aries" | "taurus" | "gemini" | ... "pisces";
```

### ❌ DON'T: Use string when specific type exists

```typescript
// Bad - could be any string, no validation
function setZodiacSign(sign: string) { ... }
```

### ✅ DO: Leverage IDE type inference

```typescript
// TypeScript infers FormData type from useState initial value
const [formData, setFormData] = useState({ name: "", email: "" });
// ^^ type is inferred, no need to annotate
```

---

## Related Decisions

- **ADR-001**: Frontend Framework (Next.js has excellent TypeScript support)
- **ADR-003**: Component Architecture (Server/Client components benefit from types)

## Links

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React with TypeScript](https://react.dev/learn/typescript)
- [Next.js TypeScript](https://nextjs.org/docs/basic-features/typescript)

---

**Version:** 1.0  
**Last Updated:** 2026-04-24
