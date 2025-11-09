---
sidebar_position: 11
title: Developer Guide
---

# Developer Guide

Build custom agents, extend the platform, and integrate Smart AI Hub into your applications.

## Developer Environment Setup

### Prerequisites

- Node.js 18+ or Python 3.9+
- Git
- Code editor (VS Code recommended)
- Smart AI Hub account

### Installation

#### Node.js SDK

```bash
npm install @smart-ai-hub/sdk
```

#### Python SDK

```bash
pip install smart-ai-hub
```

### Configuration

```javascript
// Node.js


const client = new SmartAIHub({
  apiKey: process.env.SMART_AI_HUB_API_KEY,
  workspace: 'your-workspace-id'
});
```

```python
# Python
from smart_ai_hub import SmartAIHub

client = SmartAIHub(
    api_key=os.getenv('SMART_AI_HUB_API_KEY'),
    workspace='your-workspace-id'
)
```

## Writing Custom Agents / Plugins

### Agent Structure

```typescript
interface CustomAgent {
  name: string;
  description: string;
  version: string;
  
  // Agent configuration
  config: {
    llm: LLMConfig;
    capabilities: string[];
    integrations: string[];
  };
  
  // Lifecycle hooks
  onInit?: () => Promise<void>;
  onMessage: (message: Message) => Promise<Response>;
  onError?: (error: Error) => Promise<void>;
  onDestroy?: () => Promise<void>;
}
```

### Example: Custom Weather Agent

```typescript


export class WeatherAgent extends Agent {
  name = 'Weather Agent';
  description = 'Provides weather information';
  
  async onMessage(message: Message): Promise<Response> {
    const location = this.extractLocation(message.text);
    const weather = await this.getWeather(location);
    
    return {
      text: `The weather in ${location} is ${weather.condition} with a temperature of ${weather.temp}°C`,
      data: weather
    };
  }
  
  private async getWeather(location: string) {
    // Call weather API
    const response = await fetch(`https://api.weather.com/v1/${location}`);
    return response.json();
  }
  
  private extractLocation(text: string): string {
    // Extract location from user message
    // Implementation details...
  }
}
```

## Agent Lifecycle Hooks

### onInit()
Called when agent is initialized.

```typescript
async onInit() {
  // Load configuration
  // Initialize connections
  // Prepare resources
}
```

### onMessage()
Called for each incoming message.

```typescript
async onMessage(message: Message): Promise<Response> {
  // Process message
  // Generate response
  return response;
}
```

### onError()
Called when an error occurs.

```typescript
async onError(error: Error) {
  // Log error
  // Send alert
  // Attempt recovery
}
```

### onDestroy()
Called when agent is destroyed.

```typescript
async onDestroy() {
  // Clean up resources
  // Close connections
  // Save state
}
```

## Smart AI Hub SDK & API Client

### Core Methods

#### Create Agent

```typescript
const agent = await client.agents.create({
  name: 'My Agent',
  llm: 'gpt-4',
  systemPrompt: 'You are a helpful assistant'
});
```

#### Execute Workflow

```typescript
const result = await client.workflows.execute(workflowId, {
  input: 'Process this data',
  parameters: { mode: 'production' }
});
```

#### Query RAG

```typescript
const results = await client.rag.query({
  query: 'What is Smart AI Hub?',
  topK: 5
});
```

## Extending Execution Layer

### Custom Nodes

Create custom workflow nodes:

```typescript


export class CustomNode extends Node {
  static config: NodeConfig = {
    type: 'custom-action',
    category: 'Actions',
    inputs: ['data'],
    outputs: ['result']
  };
  
  async execute(inputs: any) {
    // Custom logic
    return { result: processedData };
  }
}
```

### Register Custom Node

```typescript
client.nodes.register(CustomNode);
```

## Contributing to Open Source Components

We welcome contributions!

### Getting Started

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests
5. Submit a pull request

### Development Workflow

```bash
# Clone repository
git clone https://github.com/naibarn/Smart-AI-Hub.git
cd Smart-AI-Hub

# Install dependencies
pnpm install

# Run tests
pnpm test

# Start development server
pnpm dev
```

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier
- Write comprehensive tests
- Document public APIs

### Pull Request Guidelines

- Clear description of changes
- Link to related issues
- Pass all tests
- Update documentation
- Follow commit message conventions

---

**Questions?** Join our [Discord](https://discord.gg/smart-ai-hub) or [open an issue](https://github.com/naibarn/Smart-AI-Hub/issues).