# React Context API Practice

React Context API-ის პრაქტიკის პროექტი TypeScript-თან ერთად.

## 📋 აღწერა

ეს პროექტი აჩვენებს React Context API-ის გამოყენებას state management-ისთვის. პროექტში გამოიყენება:

- **Context API** - state-ის გაზიარებისთვის კომპონენტებს შორის
- **Custom Hook** (`useCounter`) - Context-ის გამოყენების გასამარტივებლად
- **TypeScript** - ტიპების უსაფრთხოებისთვის
- **Vite** - სწრაფი development server-ისთვის

## 🏗️ პროექტის სტრუქტურა

```
src/
├── components/        # React კომპონენტები
│   ├── Parent.tsx
│   ├── Child.tsx
│   ├── GrandChild.tsx
│   └── Random.tsx
├── contexts/          # Context განსაზღვრები
│   └── CounterContext.tsx
├── hooks/             # Custom hooks
│   └── useCounter.ts
└── App.tsx            # მთავარი კომპონენტი
```

## 🚀 დაყენება და გაშვება

### დამოკიდებულებების დაყენება

```bash
npm install
```

### Development server-ის გაშვება

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## 💡 გამოყენება

### Context API-ის არქიტექტურა

#### 1. Context-ის განსაზღვრა (`src/contexts/CounterContext.tsx`)

`CounterContext` იქმნება `createContext`-ის გამოყენებით და განსაზღვრავს:

- `counter: number` - counter-ის მნიშვნელობა
- `setCounter: React.Dispatch<React.SetStateAction<number>>` - counter-ის განახლების ფუნქცია

Context-ის default value არის `null`, რაც საშუალებას იძლევა შევამოწმოთ Provider-ის არსებობა.

#### 2. Custom Hook (`src/hooks/useCounter.ts`)

`useCounter()` custom hook ამარტივებს Context-ის გამოყენებას:

- იყენებს `useContext`-ს `CounterContext`-თან
- ამოწმებს Provider-ის არსებობას (თუ `context === null`, აგდებს შეცდომას)
- აბრუნებს `counter` და `setCounter`-ს

ეს საშუალებას იძლევა კომპონენტებს არ იყენონ პირდაპირ `useContext(CounterContext)`, არამედ `useCounter()` hook-ს.

#### 3. Provider-ის განთავსება (`src/App.tsx`)

`App.tsx` კომპონენტში:

- იქმნება `counter` state `useState`-ით
- `CounterContext.Provider` ატარებს `counter` და `setCounter`-ს `value` prop-ით
- Provider-ის შიგნით მდებარე ყველა კომპონენტს შეუძლია წვდომა Context-ზე

```tsx
<CounterContext.Provider value={{ counter, setCounter }}>
  <Parent />
  <Random />
</CounterContext.Provider>
```

#### 4. კომპონენტების იერარქია

**Parent → Child → GrandChild** - ეს არის კომპონენტების 3 დონის იერარქია:

- `Parent.tsx` - მხოლოდ render-ს `Child`-ს
- `Child.tsx` - მხოლოდ render-ს `GrandChild`-ს
- `GrandChild.tsx` - იყენებს `useCounter()` hook-ს Context-ის წვდომისთვის

**რატომ არის ეს მნიშვნელოვანი?**

- `Parent` და `Child` კომპონენტებს არ სჭირდებათ props-ის გადაცემა
- `GrandChild` პირდაპირ წვდომა აქვს Context-ზე, props drilling-ის გარეშე
- ეს აჩვენებს Context API-ის უპირატესობას props-ის გადაცემის ნაცვლად

#### 5. Context-ის გამოყენება კომპონენტებში

**GrandChild.tsx:**

```tsx
const { counter, setCounter } = useCounter();
```

- წვდება `counter`-ს და `setCounter`-ს
- აჩვენებს counter-ის მნიშვნელობას
- გაზრდის counter-ს +10-ით

**Random.tsx:**

```tsx
const { counter } = useCounter();
```

- წვდება მხოლოდ `counter`-ს (read-only)
- აჩვენებს counter-ის მნიშვნელობას

### როგორ მუშაობს Data Flow

1. `App.tsx` იქმნის `counter` state-ს და ატარებს მას `CounterContext.Provider`-ით
2. `Parent` და `Random` კომპონენტები არიან Provider-ის შიგნით
3. `GrandChild` (რომელიც არის `Parent → Child → GrandChild` იერარქიაში) იყენებს `useCounter()` hook-ს
4. `Random` კომპონენტი ასევე იყენებს `useCounter()` hook-ს
5. ორივე კომპონენტი წვდება იმავე `counter` state-ს, რომელიც `App.tsx`-შია განსაზღვრული
6. როცა `counter` იცვლება (App.tsx-ში ან GrandChild-ში), ორივე კომპონენტი ავტომატურად re-render-დება

## 🎯 ფუნქციონალი

- Counter-ის გაზრდა App.tsx-ში (+1)
- Counter-ის გაზრდა GrandChild-ში (+10)
- Counter-ის ჩვენება GrandChild და Random კომპონენტებში

## 🛠️ ტექნოლოგიები

- React 18.3.1
- TypeScript 5.2.2
- Vite 5.3.4
