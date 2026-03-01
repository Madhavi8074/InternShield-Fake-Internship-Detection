@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

@layer base {
  :root {
    --background: 220 20% 97%;
    --foreground: 220 25% 10%;

    --card: 0 0% 100%;
    --card-foreground: 220 25% 10%;

    --popover: 0 0% 100%;
    --popover-foreground: 220 25% 10%;

    --primary: 160 84% 39%;
    --primary-foreground: 220 25% 5%;

    --secondary: 220 20% 92%;
    --secondary-foreground: 220 25% 10%;

    --muted: 220 15% 94%;
    --muted-foreground: 220 10% 45%;

    --accent: 185 70% 42%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 72% 51%;
    --destructive-foreground: 0 0% 100%;

    --border: 220 15% 88%;
    --input: 220 15% 88%;
    --ring: 160 84% 39%;

    --radius: 0.75rem;

    --safe: 160 84% 39%;
    --safe-foreground: 160 84% 10%;
    --caution: 38 92% 50%;
    --caution-foreground: 38 92% 10%;
    --danger: 0 72% 51%;
    --danger-foreground: 0 0% 100%;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 222 30% 8%;
    --foreground: 210 20% 92%;

    --card: 222 25% 12%;
    --card-foreground: 210 20% 92%;

    --popover: 222 25% 12%;
    --popover-foreground: 210 20% 92%;

    --primary: 160 84% 39%;
    --primary-foreground: 220 25% 5%;

    --secondary: 222 20% 18%;
    --secondary-foreground: 210 20% 92%;

    --muted: 222 20% 16%;
    --muted-foreground: 215 15% 55%;

    --accent: 185 70% 42%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 222 20% 20%;
    --input: 222 20% 20%;
    --ring: 160 84% 39%;

    --safe: 160 84% 39%;
    --safe-foreground: 160 84% 90%;
    --caution: 38 92% 50%;
    --caution-foreground: 38 92% 90%;
    --danger: 0 72% 51%;
    --danger-foreground: 0 0% 100%;

    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', sans-serif;
  }
}

@layer utilities {
  .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }
}
