---
sidebar_position: 7
title: Integrations
---

# Integrations & External Systems

Connect Smart AI Hub to your favorite tools and services.

## Connecting to Third-Party Systems

Smart AI Hub integrates with 100+ external systems through MCP.

### Categories

- **Communication** - Slack, Discord, Teams
- **Productivity** - Notion, Google Workspace, Microsoft 365
- **CRM** - Salesforce, HubSpot, Pipedrive
- **Development** - GitHub, GitLab, Jira
- **Data** - Google Sheets, Airtable, PostgreSQL
- **Marketing** - Mailchimp, SendGrid, Twilio

## Webhooks and Triggers

### Incoming Webhooks
Receive data from external systems:

```javascript
POST https://api.smartaihub.app/webhooks/{webhook_id}
Content-Type: application/json

{
  "event": "user.created",
  "data": { ... }
}
```

### Outgoing Webhooks
Send data to external systems:

```json
{
  "url": "https://your-app.com/webhook",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer token"
  }
}
```

## Popular Integrations

### Slack
- Send messages
- Create channels
- Manage users
- File uploads

### Notion
- Create pages
- Update databases
- Search content
- Manage workspaces

### Google Sheets
- Read/write data
- Create spreadsheets
- Format cells
- Run formulas

### Zapier Integration
Connect to 5,000+ apps through Zapier.

## LLM Providers Configuration

Configure multiple LLM providers:

```json
{
  "providers": [
    {
      "name": "openai",
      "apiKey": "sk-...",
      "models": ["gpt-4", "gpt-3.5-turbo"]
    },
    {
      "name": "anthropic",
      "apiKey": "sk-ant-...",
      "models": ["claude-3-opus"]
    }
  ]
}
```

## Secure API Keys Management

- **Encrypted Storage** - All keys encrypted at rest
- **Rotation** - Automatic key rotation
- **Audit Logs** - Track key usage
- **Scoped Access** - Limit key permissions