---
sidebar_position: 5
title: API Gateway
---

# API Gateway

The Unified API Gateway powered by MCP (Model Context Protocol) connects Smart AI Hub to external systems.

## What is MCP Server?

The MCP Server is a universal integration layer that:

- 🔌 Connects to 100+ external systems
- 🔄 Standardizes API interactions
- 🔐 Manages authentication securely
- 📊 Monitors integration health
- ⚡ Provides low-latency access

## Integration with External Systems

### LLM Connections
Direct integration with:
- OpenAI API
- Anthropic API
- Google AI API
- Custom LLM endpoints

### ChatGPT / Gemini / Claude Connectivity
Enable your agents in:
- ChatGPT (via GPT Actions)
- Google Gemini (via Extensions)
- Claude (via MCP)

## API Reference

### Core Endpoints

#### Create Agent
```http
POST /api/v1/agents
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "name": "My Agent",
  "llm": "gpt-4",
  "systemPrompt": "You are a helpful assistant"
}
```

#### Execute Workflow
```http
POST /api/v1/workflows/{id}/execute
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "input": "Process this data",
  "parameters": {}
}
```

### Authentication

Use API keys for authentication:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.smartaihub.app/v1/agents
```

### Rate Limits

| Tier | Requests/min | Requests/day |
|------|--------------|--------------|
| Free | 60 | 1,000 |
| Pro | 600 | 100,000 |
| Enterprise | Custom | Custom |