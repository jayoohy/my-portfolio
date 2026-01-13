import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

// This would typically fetch from a CMS or markdown files
const blogPosts: Record<
  string,
  {
    title: string;
    content: string;
    date: string;
    readTime: string;
    category: string;
  }
> = {
  "getting-started-with-nextjs-14": {
    title: "Getting Started with Next.js 14 App Router",
    content: `
      <h2>Introduction</h2>
      <p>Next.js 14 introduces the App Router, a revolutionary new way to build React applications with improved performance, better developer experience, and powerful new features. This guide will walk you through the fundamentals and help you get started with this exciting update.</p>
      
      <h2>What's New in Next.js 14</h2>
      <p>The App Router represents a significant shift in how Next.js handles routing and rendering. Built on React Server Components, it offers several key advantages:</p>
      
      <h3>React Server Components</h3>
      <p>Server Components allow you to build applications that leverage the server for data fetching and rendering, reducing the amount of JavaScript sent to the client. This results in faster page loads and improved performance.</p>
      
      <h3>Improved Data Fetching</h3>
      <p>With the App Router, data fetching is more intuitive. You can use async/await directly in Server Components, making it easier to fetch data without additional API routes.</p>
      
      <h3>Better Performance</h3>
      <p>The new routing system enables better code splitting, faster navigation, and improved loading states. Streaming and Suspense are built-in, allowing for progressive page rendering.</p>
      
      <h3>Enhanced Developer Experience</h3>
      <p>The file-based routing system is more flexible, supporting layouts, loading states, error boundaries, and more, all through a simple folder structure.</p>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js 14 project with the App Router, use the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      <p>When prompted, make sure to select "Yes" for using the App Router. The project structure will look different from previous versions:</p>
      <ul>
        <li><code>app/</code> - Contains your routes, layouts, and pages</li>
        <li><code>app/layout.tsx</code> - Root layout for your application</li>
        <li><code>app/page.tsx</code> - Your home page</li>
      </ul>
      
      <h2>Key Concepts</h2>
      <h3>Layouts</h3>
      <p>Layouts allow you to create shared UI that persists across routes. They're perfect for navigation bars, footers, and other components that should remain consistent.</p>
      
      <h3>Server and Client Components</h3>
      <p>By default, all components in the App Router are Server Components. To make a component interactive, add the <code>"use client"</code> directive at the top of the file.</p>
      
      <h3>Data Fetching</h3>
      <p>You can fetch data directly in Server Components using async/await. Next.js will automatically handle caching and revalidation for you.</p>
      
      <h2>Conclusion</h2>
      <p>The App Router in Next.js 14 represents the future of React development. With its focus on performance, developer experience, and modern React features, it's an excellent choice for building your next application. Start experimenting with it today and experience the benefits firsthand!</p>
    `,
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
  },
  "building-ai-chatbots-openai": {
    title: "Building AI-Powered Chatbots with OpenAI",
    content: `
      <h2>Introduction</h2>
      <p>Chatbots have become an essential tool for businesses looking to provide 24/7 customer support and automate interactions. With OpenAI's powerful API, building intelligent, conversational chatbots has never been easier. In this guide, we'll explore how to create a chatbot that can understand context, maintain conversations, and provide helpful responses.</p>
      
      <h2>Understanding OpenAI's API</h2>
      <p>OpenAI provides several models for building chatbots, with GPT-3.5 and GPT-4 being the most popular choices. These models are trained on vast amounts of text data and can generate human-like responses to a wide variety of prompts.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Context Awareness:</strong> The API can maintain conversation context across multiple messages</li>
        <li><strong>Customization:</strong> You can fine-tune responses using system prompts and parameters</li>
        <li><strong>Streaming:</strong> Support for streaming responses for real-time interactions</li>
        <li><strong>Function Calling:</strong> Enable the model to call external functions and APIs</li>
      </ul>
      
      <h2>Setting Up Your Project</h2>
      <p>First, you'll need to obtain an API key from OpenAI. Once you have your key, install the OpenAI SDK:</p>
      <pre><code>npm install openai</code></pre>
      
      <h2>Basic Chatbot Implementation</h2>
      <p>Here's a simple example of how to create a chatbot using Node.js:</p>
      <pre><code>import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function chat(messages) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 0.7,
  });
  
  return completion.choices[0].message.content;
}</code></pre>
      
      <h2>Best Practices</h2>
      <h3>Prompt Engineering</h3>
      <p>Effective prompt engineering is crucial for getting good results. Use system messages to set the chatbot's personality and behavior, and be specific about the desired output format.</p>
      
      <h3>Context Management</h3>
      <p>Maintain conversation history by keeping track of messages. However, be mindful of token limits and consider summarizing older messages when conversations get too long.</p>
      
      <h3>Error Handling</h3>
      <p>Always implement proper error handling for API calls. Network issues, rate limits, and API errors should be gracefully handled to provide a smooth user experience.</p>
      
      <h3>Rate Limiting</h3>
      <p>Implement rate limiting on your end to prevent excessive API calls and manage costs. Consider caching common responses when appropriate.</p>
      
      <h2>Advanced Features</h2>
      <h3>Function Calling</h3>
      <p>Function calling allows your chatbot to interact with external systems. Define functions that the model can call, such as fetching weather data or making database queries.</p>
      
      <h3>Streaming Responses</h3>
      <p>For better user experience, implement streaming to show responses as they're generated. This makes the chatbot feel more responsive and interactive.</p>
      
      <h2>Conclusion</h2>
      <p>Building AI-powered chatbots with OpenAI opens up endless possibilities for creating engaging user experiences. By following best practices and understanding the API's capabilities, you can build chatbots that are both intelligent and useful. Start experimenting with different prompts and configurations to find what works best for your use case!</p>
    `,
    date: "2024-01-10",
    readTime: "8 min read",
    category: "AI & Automation",
  },
  "modern-frontend-design-patterns": {
    title: "Modern Frontend Design Patterns",
    content: `
      <h2>Introduction</h2>
      <p>As frontend applications grow in complexity, following established design patterns becomes crucial for maintaining code quality, scalability, and developer productivity. In this article, we'll explore modern design patterns that have become industry standards for building robust frontend applications.</p>
      
      <h2>Component Composition</h2>
      <p>Component composition is one of the most powerful patterns in modern React development. Instead of creating large, monolithic components, break them down into smaller, reusable pieces that can be combined in various ways.</p>
      
      <h3>Benefits</h3>
      <ul>
        <li>Improved reusability</li>
        <li>Easier testing</li>
        <li>Better maintainability</li>
        <li>Clearer component hierarchy</li>
      </ul>
      
      <h2>Custom Hooks Pattern</h2>
      <p>Custom hooks allow you to extract component logic into reusable functions. This pattern promotes code reuse and separation of concerns.</p>
      <pre><code>function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
}</code></pre>
      
      <h2>Render Props Pattern</h2>
      <p>The render props pattern involves passing a function as a prop that returns React elements. This pattern is excellent for sharing code between components.</p>
      
      <h2>Higher-Order Components (HOCs)</h2>
      <p>While HOCs are less common in modern React (hooks are preferred), they're still useful for cross-cutting concerns like authentication and data fetching.</p>
      
      <h2>State Management Patterns</h2>
      <h3>Context API</h3>
      <p>For global state that doesn't change frequently, the Context API is a great choice. It's built into React and doesn't require additional libraries.</p>
      
      <h3>State Management Libraries</h3>
      <p>For complex state management, consider libraries like Zustand, Jotai, or Redux Toolkit. Choose based on your application's needs.</p>
      
      <h2>Error Boundaries</h2>
      <p>Error boundaries catch JavaScript errors anywhere in the component tree and display fallback UI. This prevents the entire app from crashing.</p>
      
      <h2>Code Splitting and Lazy Loading</h2>
      <p>Split your code into smaller chunks that can be loaded on demand. React's <code>lazy()</code> and <code>Suspense</code> make this straightforward.</p>
      
      <h2>Conclusion</h2>
      <p>Understanding and applying modern frontend design patterns will significantly improve your code quality and development experience. Start with component composition and custom hooks, then explore other patterns as your application grows in complexity.</p>
    `,
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Design",
  },
  "workflow-automation-langchain": {
    title: "Workflow Automation with LangChain",
    content: `
      <h2>Introduction</h2>
      <p>LangChain is a powerful framework for building applications with Large Language Models (LLMs). It simplifies the process of creating AI-powered workflows, making it easier to automate complex business processes. In this comprehensive guide, we'll explore how to leverage LangChain for workflow automation.</p>
      
      <h2>What is LangChain?</h2>
      <p>LangChain provides a standard interface for chains, lots of integrations with other tools, and end-to-end chains for common applications. It's designed to help developers build applications that combine LLMs with other sources of computation or knowledge.</p>
      
      <h2>Core Concepts</h2>
      <h3>Chains</h3>
      <p>Chains are sequences of calls to LLMs or other utilities. They allow you to combine multiple components to create more complex applications.</p>
      
      <h3>Agents</h3>
      <p>Agents use LLMs to decide which actions to take. They can use tools, observe the results, and make decisions based on the outcomes.</p>
      
      <h3>Memory</h3>
      <p>Memory allows chains and agents to remember information from previous interactions, enabling more context-aware conversations and workflows.</p>
      
      <h2>Building Your First Workflow</h2>
      <p>Let's create a simple workflow that processes customer inquiries and routes them to the appropriate department:</p>
      <pre><code>from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

llm = OpenAI(temperature=0)
prompt = PromptTemplate(
    input_variables=["inquiry"],
    template="Classify this customer inquiry: {inquiry}"
)
chain = LLMChain(llm=llm, prompt=prompt)
result = chain.run("I need help with my order")</code></pre>
      
      <h2>Advanced Workflow Patterns</h2>
      <h3>Sequential Chains</h3>
      <p>Sequential chains allow you to chain multiple operations together, where the output of one chain becomes the input of the next.</p>
      
      <h3>Router Chains</h3>
      <p>Router chains can dynamically select which chain to use based on the input, enabling intelligent routing in complex workflows.</p>
      
      <h3>Agents with Tools</h3>
      <p>Agents can use tools to interact with external systems, making them powerful for automation tasks that require multiple steps.</p>
      
      <h2>Real-World Applications</h2>
      <h3>Customer Support Automation</h3>
      <p>Automate customer support by creating agents that can answer common questions, escalate complex issues, and integrate with your CRM system.</p>
      
      <h3>Content Generation Workflows</h3>
      <p>Create workflows that generate, review, and publish content automatically, with human oversight at critical steps.</p>
      
      <h3>Data Processing Pipelines</h3>
      <p>Use LangChain to process and analyze large volumes of text data, extracting insights and generating reports automatically.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Start with simple chains and gradually increase complexity</li>
        <li>Use appropriate temperature settings for your use case</li>
        <li>Implement proper error handling and fallbacks</li>
        <li>Monitor token usage and costs</li>
        <li>Test thoroughly with various inputs</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>LangChain provides a powerful framework for building AI-powered workflow automation. By understanding its core concepts and patterns, you can create sophisticated automation systems that save time and improve efficiency. Start experimenting with simple chains and gradually build more complex workflows as you become more comfortable with the framework.</p>
    `,
    date: "2023-12-28",
    readTime: "10 min read",
    category: "AI & Automation",
  },
  "typescript-best-practices-react": {
    title: "TypeScript Best Practices for React",
    content: `
      <h2>Introduction</h2>
      <p>TypeScript has become the standard for building large-scale React applications. It provides type safety, better IDE support, and helps catch errors before they reach production. In this guide, we'll explore best practices for using TypeScript effectively with React.</p>
      
      <h2>Component Props Typing</h2>
      <p>Always type your component props explicitly. Use interfaces for object props and type aliases for simpler cases:</p>
      <pre><code>interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

function Button({ label, onClick, variant = 'primary', disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={variant}>
      {label}
    </button>
  );
}</code></pre>
      
      <h2>Event Handlers</h2>
      <p>Use React's built-in event types for event handlers:</p>
      <pre><code>function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  console.log(event.target.value);
}

function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
}</code></pre>
      
      <h2>Hooks Typing</h2>
      <h3>useState</h3>
      <p>TypeScript can often infer useState types, but be explicit for complex types:</p>
      <pre><code>const [user, setUser] = useState<User | null>(null);
const [count, setCount] = useState<number>(0);</code></pre>
      
      <h3>useRef</h3>
      <p>For refs that will hold DOM elements, use the appropriate element type:</p>
      <pre><code>const inputRef = useRef<HTMLInputElement>(null);
const divRef = useRef<HTMLDivElement>(null);</code></pre>
      
      <h3>Custom Hooks</h3>
      <p>Type your custom hooks' return values explicitly:</p>
      <pre><code>function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState<number>(initialValue);
  
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  
  return { count, increment } as const;
}</code></pre>
      
      <h2>Generic Components</h2>
      <p>Use generics for reusable components that work with different data types:</p>
      <pre><code>interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}</code></pre>
      
      <h2>API Response Typing</h2>
      <p>Create types for your API responses to ensure type safety throughout your application:</p>
      <pre><code>interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

async function fetchUser(id: number): Promise<ApiResponse<User>> {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}</code></pre>
      
      <h2>Common Pitfalls to Avoid</h2>
      <ul>
        <li><strong>Using <code>any</code>:</strong> Avoid using <code>any</code> as it defeats the purpose of TypeScript</li>
        <li><strong>Ignoring type errors:</strong> Fix type errors rather than suppressing them</li>
        <li><strong>Over-typing:</strong> Let TypeScript infer types when possible</li>
        <li><strong>Missing null checks:</strong> Always handle potentially null/undefined values</li>
      </ul>
      
      <h2>Type Utilities</h2>
      <p>Leverage TypeScript's utility types for common transformations:</p>
      <pre><code>type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type UserEmail = Pick<User, 'email'>;
type UserWithoutId = Omit<User, 'id'>;</code></pre>
      
      <h2>Conclusion</h2>
      <p>Following TypeScript best practices in React will significantly improve your code quality and developer experience. Start with proper prop typing and gradually adopt more advanced patterns as your application grows. Remember, the goal is to catch errors early and make your code more maintainable.</p>
    `,
    date: "2023-12-20",
    readTime: "7 min read",
    category: "Web Development",
  },
  "responsive-design-tailwind": {
    title: "Responsive Design with Tailwind CSS",
    content: `
      <h2>Introduction</h2>
      <p>Responsive design is essential for modern web applications. Tailwind CSS makes building responsive interfaces easier than ever with its utility-first approach and mobile-first breakpoints. In this guide, we'll explore how to create beautiful, responsive designs using Tailwind CSS.</p>
      
      <h2>Mobile-First Approach</h2>
      <p>Tailwind uses a mobile-first breakpoint system. This means you design for mobile devices first, then add styles for larger screens using breakpoint prefixes:</p>
      <pre><code>// Mobile first (default)
<div className="text-sm p-4">
  Mobile styles
</div>

// Tablet and up
<div className="md:text-base md:p-6">
  Tablet styles
</div>

// Desktop and up
<div className="lg:text-lg lg:p-8">
  Desktop styles
</div></code></pre>
      
      <h2>Breakpoints</h2>
      <p>Tailwind's default breakpoints are:</p>
      <ul>
        <li><code>sm:</code> 640px and up</li>
        <li><code>md:</code> 768px and up</li>
        <li><code>lg:</code> 1024px and up</li>
        <li><code>xl:</code> 1280px and up</li>
        <li><code>2xl:</code> 1536px and up</li>
      </ul>
      
      <h2>Responsive Grid Layouts</h2>
      <p>Create responsive grids that adapt to different screen sizes:</p>
      <pre><code>// 1 column on mobile, 2 on tablet, 3 on desktop
&lt;div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"&gt;
  {'{'}items.map(item =&gt; (
    &lt;div key={'{'}item.id{'}'}&gt;{'{'}item.content{'}'}&lt;/div&gt;
  )){'}'}
&lt;/div&gt;</code></pre>
      
      <h2>Flexbox Responsive Patterns</h2>
      <p>Use flexbox utilities for responsive layouts:</p>
      <pre><code>// Stack on mobile, row on desktop
<div className="flex flex-col md:flex-row gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Center on mobile, space between on desktop
<div className="flex flex-col items-center md:flex-row md:justify-between">
  <div>Left</div>
  <div>Right</div>
</div></code></pre>
      
      <h2>Responsive Typography</h2>
      <p>Adjust font sizes for different screen sizes:</p>
      <pre><code>// Smaller on mobile, larger on desktop
<h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
  Responsive Heading
</h1>

<p className="text-sm md:text-base lg:text-lg">
  Responsive paragraph text
</p></code></pre>
      
      <h2>Hiding and Showing Elements</h2>
      <p>Show or hide elements based on screen size:</p>
      <pre><code>// Hidden on mobile, visible on desktop
<div className="hidden md:block">
  Desktop only content
</div>

// Visible on mobile, hidden on desktop
<div className="block md:hidden">
  Mobile only content
</div></code></pre>
      
      <h2>Responsive Spacing</h2>
      <p>Adjust padding and margins for different screen sizes:</p>
      <pre><code>// Less padding on mobile, more on desktop
<div className="p-4 md:p-8 lg:p-12">
  Responsive padding
</div>

// Tighter spacing on mobile
&lt;div className="space-y-2 md:space-y-4 lg:space-y-6"&gt;
  {'{'}items.map(item =&gt; &lt;div key={'{'}item.id{'}'}&gt;{'{'}item{'}'}&lt;/div&gt;){'}'}
&lt;/div&gt;</code></pre>
      
      <h2>Container Queries</h2>
      <p>Tailwind also supports container queries for component-level responsiveness:</p>
      <pre><code>@container
<div className="@container">
  <div className="@md:text-lg">
    Responsive to container size
  </div>
</div></code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Always start with mobile styles</li>
        <li>Use consistent spacing scales</li>
        <li>Test on real devices when possible</li>
        <li>Don't overuse breakpoints - sometimes simpler is better</li>
        <li>Use responsive images with <code>srcset</code></li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Tailwind CSS makes responsive design straightforward and maintainable. By following a mobile-first approach and leveraging Tailwind's utility classes, you can create beautiful, responsive interfaces that work seamlessly across all devices. Remember to test your designs on various screen sizes and devices to ensure the best user experience.</p>
    `,
    date: "2023-12-15",
    readTime: "4 min read",
    category: "Design",
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

type BlogParams = {
  params: Promise<{
    slug: keyof typeof blogPosts;
  }>;
};

export default async function BlogPost({ params }: BlogParams) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) notFound();

  return (
    <PageContainer>
      <article className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#6366f1] mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="px-3 py-1 rounded-full text-sm bg-linear-to-r from-[#6366f1]/10 to-[#8b5cf6]/10 text-[#6366f1] font-medium border border-[#6366f1]/20">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <style>{`
          .blog-content h2 {
            font-size: 1.7rem;
            font-weight: bold;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          .blog-content h3 {
            font-size: 1.15rem;
            font-weight: bold;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
          .blog-content p {
            margin-bottom: 1rem;
            line-height: 1.625;
          }
          .blog-content ul {
            list-style-type: disc;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
          }
          .blog-content ol {
            list-style-type: decimal;
            margin-left: 1.5rem;
            margin-bottom: 1rem;
          }
          .blog-content li {
            margin-bottom: 0.5rem;
          }
          .blog-content pre {
            background-color: rgba(0, 0, 0, 0.05);
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin-bottom: 1rem;
          }
          .blog-content code {
            font-family: monospace;
            font-size: 0.875rem;
          }
          .blog-content pre code {
            background-color: transparent;
          }
        `}</style>
        <div
          className="blog-content overflow-hidden"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </PageContainer>
  );
}
