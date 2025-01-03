/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    "introduction",
    {
      type: "doc",
      id: "overview",
      label: "What is GrowthBook?",
    },
    {
      type: "doc",
      id: "quick-start",
      label: "Quick Start Guide",
    },
    {
      type: "category",
      collapsed: true,
      label: "Feature Flags",
      link: {
        type: "doc",
        id: "features/index",
      },
      items: [
        {
          type: "doc",
          id: "features/basics",
          label: "Basics",
        },
        {
          type: "doc",
          id: "features/environments",
          label: "Environments",
        },
        {
          type: "doc",
          id: "features/targeting",
          label: "Targeting",
        },
        {
          type: "doc",
          id: "features/rules",
          label: "Rules",
        },
        {
          type: "doc",
          id: "features/prerequisites",
          label: "Prerequisites",
        },
        {
          type: "doc",
          id: "features/scheduling",
          label: "Scheduling",
        },
        {
          type: "doc",
          id: "features/stale-detection",
          label: "Stale Feature Detection",
        },
        {
          type: "doc",
          id: "features/code-references",
          label: "Code References",
        },
        {
          type: "doc",
          id: "features/approval-flows",
          label: "Approval Flows",
          className: "pill-new",
        },
      ],
    },
    {
      type: "category",
      label: "Data & Metrics",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Connecting to Your Data Warehouse",
          collapsed: true,
          link: {
            type: "doc",
            id: "experimentation-analysis/connecting-to-your-data-warehouse",
          },
          items: [
            {
              type: "doc",
              id: "warehouses/athena",
              label: "Athena",
            },
            {
              type: "doc",
              id: "warehouses/bigquery",
              label: "BigQuery",
            },
            {
              type: "doc",
              id: "warehouses/clickhouse",
              label: "Clickhouse",
            },
            {
              type: "doc",
              id: "warehouses/databricks",
              label: "Databricks",
            },
            {
              type: "doc",
              id: "warehouses/mixpanel",
              label: "Mixpanel",
            },
            {
              type: "doc",
              id: "warehouses/ms-sql-or-sql-server",
              label: "MS SQL or SQL server",
            },
            {
              type: "doc",
              id: "warehouses/mysql-or-mariadb",
              label: "MySQL or MariaDB",
            },
            {
              type: "doc",
              id: "warehouses/postgres",
              label: "Postgres",
            },
            {
              type: "doc",
              id: "warehouses/vertica",
              label: "Vertica",
            },
            {
              type: "doc",
              id: "warehouses/prestodb-or-trino",
              label: "PrestoDB or Trino",
            },
            {
              type: "doc",
              id: "warehouses/redshift",
              label: "Redshift",
            },
            {
              type: "doc",
              id: "warehouses/snowflake",
              label: "Snowflake",
            },
          ],
        },
        {
          type: "category",
          collapsed: true,
          link: {
            type: "doc",
            id: "experimentation-analysis/data-source-configuration",
          },
          label: "Data Source Configuration",
          items: [
            {
              type: "doc",
              id: "event-trackers/amplitude",
              label: "Amplitude",
            },
            {
              type: "doc",
              id: "event-trackers/clevertap",
              label: "CleverTap",
            },
            {
              type: "doc",
              id: "event-trackers/firebase",
              label: "Firebase",
            },
            {
              type: "doc",
              id: "event-trackers/freshpaint",
              label: "Freshpaint",
            },
            {
              type: "doc",
              id: "event-trackers/fullstory",
              label: "Fullstory",
            },
            {
              type: "doc",
              id: "event-trackers/GA4-google-analytics",
              label: "Google Analytics (GA4)",
            },
            {
              type: "doc",
              id: "event-trackers/heap",
              label: "Heap",
            },
            {
              type: "doc",
              id: "event-trackers/jitsu",
              label: "Jitsu",
            },
            {
              type: "doc",
              id: "event-trackers/keenio",
              label: "KeenIO",
            },
            {
              type: "doc",
              id: "event-trackers/matomo",
              label: "Matomo",
            },
            {
              type: "doc",
              id: "event-trackers/mixpanel",
              label: "Mixpanel",
            },
            {
              type: "doc",
              id: "event-trackers/mparticle",
              label: "MParticle",
            },
            {
              type: "doc",
              id: "event-trackers/rudderstack",
              label: "Rudderstack",
            },
            {
              type: "doc",
              id: "event-trackers/segment",
              label: "Segment",
            },
            {
              type: "doc",
              id: "event-trackers/snowplow",
              label: "Snowplow",
            },
            {
              type: "doc",
              id: "event-trackers/custom",
              label: "Custom Data Sources",
            },
          ],
        },
        {
          type: "category",
          label: "Metrics and Fact Tables",
          collapsed: true,

          link: {
            type: "doc",
            id: "metrics/metrics",
          },
          items: [
            {
              type: "doc",
              id: "metrics/metrics",
              label: "Metrics Overview",
            },
            {
              type: "doc",
              id: "metrics/metric-examples",
              label: "Metric Examples and Use Cases",
            },
            {
              type: "doc",
              id: "metrics/legacy-metrics",
              label: "Legacy Metrics",
            },
          ],
        },
        {
          type: "doc",
          id: "experimentation-analysis/data-pipeline",
          label: "Data Pipeline",
        },
      ],
    },
    {
      type: "category",
      label: "Experimentation",
      collapsed: true,
      link: {
        type: "doc",
        id: "experiments",
      },
      items: [
        {
          type: "doc",
          id: "feature-flag-experiments",
          label: "Feature Flag Experiments",
        },
        {
          type: "doc",
          id: "visual-editor",
          label: "Visual Editor",
        },
        {
          type: "doc",
          id: "running-experiments/url-redirects",
          label: "URL Redirects",
        },

        {
          type: "doc",
          id: "experimentation-analysis/experiment-configuration",
          label: "Experiment Settings",
        },

        {
          type: "doc",
          id: "experimentation-analysis/experiment-results",
          label: "Experiment Results",
        },
        {
          type: "doc",
          id: "running-experiments/making-changes",
          label: "Make Changes to Experiments",
        },
        {
          type: "category",
          label: "Bandits",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "bandits/overview",
              label: "Overview",
            },
            {
              type: "doc",
              id: "bandits/config",
              label: "Configuring Bandits",
            },
            {
              type: "doc",
              id: "bandits/results",
              label: "Understanding Results",
            },
          ],
        },
        {
          type: "doc",
          id: "sticky-bucketing",
          label: "Sticky Bucketing",
        },
        {
          type: "doc",
          id: "experimentation-analysis/dimensions",
          label: "Dimensions",
        },
        {
          type: "doc",
          id: "running-experiments/pre-launch-checklist",
          label: "Pre-Launch Checklists",
        },
        {
          type: "doc",
          id: "importing-experiments",
          label: "Importing External Experiments",
        },
        {
          type: "category",
          label: "Statistics",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "statistics/overview",
              label: "Statistics Overview",
            },
            {
              type: "doc",
              id: "statistics/details",
              label: "Statistical Details",
            },
            {
              type: "doc",
              id: "statistics/quantile",
              label: "Quantile Testing",
            },
            {
              type: "doc",
              id: "statistics/cuped",
              label: "Regression Adjustment (CUPED)",
            },
            {
              type: "doc",
              id: "statistics/sequential",
              label: "Sequential Testing",
            },
            {
              type: "doc",
              id: "statistics/multiple-corrections",
              label: "Multiple Testing Corrections",
            },
            {
              type: "doc",
              id: "statistics/aggregation",
              label: "Aggregate Data",
            },
            {
              type: "doc",
              id: "statistics/power",
              label: "Power Analysis",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "SDKs",
      collapsed: false,
      link: {
        type: "doc",
        id: "lib/index",
      },
      items: [
        {
          type: "category",
          label: "Back-end",
          collapsed: true,
          items: [
            { type: "doc", id: "lib/node", label: "Node.js" },
            { type: "doc", id: "lib/php", label: "PHP" },
            { type: "doc", id: "lib/ruby", label: "Ruby" },
            { type: "doc", id: "lib/python", label: "Python" },
            {
              type: "doc",
              id: "lib/java",
              label: "Java",
            },
            {
              type: "doc",
              id: "lib/csharp",
              label: "C#",
            },
            { type: "doc", id: "lib/go", label: "Go" },
            {
              type: "doc",
              id: "lib/elixir",
              label: "Elixir",
              className: "pill-new",
            },
          ],
        },
        {
          type: "category",
          label: "Front-end",
          collapsed: true,
          items: [
            { type: "doc", id: "lib/script-tag", label: "HTML Script Tag" },
            { type: "doc", id: "lib/js", label: "Javascript" },
            { type: "doc", id: "lib/react", label: "React" },
            { type: "doc", id: "lib/vue", label: "Vue.js" },
          ],
        },
        {
          type: "category",
          label: "Mobile",
          collapsed: true,
          items: [
            { type: "doc", id: "lib/kotlin", label: "Kotlin (Android)" },
            { type: "doc", id: "lib/flutter", label: "Flutter" },
            { type: "doc", id: "lib/swift", label: "Swift (iOS)" },
            { type: "doc", id: "lib/react-native", label: "React Native" },
          ],
        },
        {
          type: "category",
          label: "Edge",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "lib/edge/cloudflare",
              label: "Cloudflare Workers",
            },
            {
              type: "doc",
              id: "lib/edge/fastly",
              label: "Fastly Compute",
            },
            { type: "doc", id: "lib/edge/lambda", label: "Lambda@Edge" },
            {
              type: "doc",
              id: "lib/edge/other",
              label: "Other edge providers",
            },
          ],
        },
        { type: "doc", id: "lib/build-your-own", label: "Build Your Own" },
      ],
    },
    {
      type: "category",
      label: "Self-Hosting",
      collapsed: true,
      link: {
        type: "doc",
        id: "self-host/index",
      },
      items: [
        "self-host/environment-variables",
        "self-host/config-yml",
        "self-host/production",
        { type: "doc", id: "self-host/cdn" },
        { type: "doc", id: "self-host/proxy", label: "Proxy" },
      ],
    },
    { type: "doc", id: "api-overview", label: "API" },
    {
      type: "doc",
      id: "dashboard",
      label: "Management Dashboard",
    },
    {
      type: "category",
      collapsed: true,
      label: "Webhooks",
      items: [
        { type: "doc", id: "webhooks/overview", label: "Webhooks overview" },
        {
          type: "category",
          label: "Event Webhooks",
          collapsed: true,
          link: {
            type: "doc",
            id: "webhooks/event-webhooks",
          },
          items: [
            {
              type: "doc",
              id: "webhooks/event-webhooks/events",
              label: "Available Events",
            },
          ],
        },
        { type: "doc", id: "webhooks/sdk-webhooks", label: "SDK Webhooks" },
        {
          type: "doc",
          id: "webhooks/global-sdk-webhooks",
          label: "Global SDK Webhooks",
        },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "integrations/slack",
          label: "Slack alerts",
          className: "pill-new",
        },
        {
          type: "doc",
          id: "integrations/discord",
          label: "Discord alerts",
          className: "pill-new",
        },
        {
          type: "doc",
          id: "integrations/datadog",
          label: "DataDog",
        },
        {
          type: "doc",
          id: "integrations/github-metrics",
          label: "GitHub (Metric Definitions)",
        },
        {
          type: "doc",
          id: "tools/chrome-extension",
          label: "Chrome Extension",
        },
        {
          type: "doc",
          id: "tools/vscode-extension",
          label: "VS Code Extension",
        },
        {
          type: "doc",
          id: "tools/cli",
          className: "pill-new",
          label: "GrowthBook CLI",
        },
      ],
    },
    {
      type: "category",
      label: "Security",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "account/user-permissions",
          label: "Roles & Permissions",
        },
        { type: "doc", id: "sso", label: "SSO" },
        {
          type: "doc",
          id: "integrations/scim",
          label: "SCIM",
        },
        {
          type: "doc",
          id: "compliance",
          label: "Compliance",
        },
        {
          type: "doc",
          id: "account/audit-logs",
          label: "Audit Logs",
        },
      ],
    },
    { type: "doc", id: "faq", label: "FAQ" },
    {
      type: "category",
      label: "Tutorials",
      collapsed: true,
      link: {
        type: "doc",
        id: "guide/index",
      },
      className: "top-divider",
      items: [
        {
          type: "doc",
          id: "guide/strapi",
          label: "Strapi CMS",
          className: "pill-new",
        },
        {
          type: "doc",
          id: "guide/contentful",
          label: "Contentful CMS",
        },
        { type: "doc", id: "guide/deno-hono", label: "Deno + Hono" },
        {
          type: "doc",
          id: "guide/express-js",
          label: "Express.js",
        },
        {
          type: "doc",
          id: "guide/nextjs-and-vercel-feature-flags",
          label: "Next.js + Vercel Feature Flags",
        },
        {
          type: "doc",
          id: "guide/nextjs-app-router",
          label: "Next.js (App Router)",
        },
        {
          type: "doc",
          id: "guide/nextjs-and-growthbook",
          label: "Next.js (Pages Router)",
        },
        {
          type: "doc",
          id: "guide/create-react-app-and-growthbook",
          label: "Create React App",
        },
        {
          type: "doc",
          id: "event-trackers/GA4-google-analytics",
          label: "Google Analytics (GA4)",
        },
        {
          type: "doc",
          id: "guide/google-tag-manager-and-growthbook",
          label: "Google Tag Manager (GTM)",
        },
        {
          type: "doc",
          id: "integrations/shopify",
          label: "Shopify + GrowthBook",
        },
        {
          type: "doc",
          id: "integrations/webflow",
          label: "Webflow + GrowthBook",
        },
        {
          type: "doc",
          id: "integrations/wordpress",
          label: "WordPress + GrowthBook",
        },
        {
          type: "doc",
          id: "guide/rudderstack-and-nextjs-with-growthbook",
          label: "Rudderstack + Next.js",
        },
        {
          type: "doc",
          id: "guide/importing",
          label: "Migrate from LaunchDarkly",
        },
      ],
    },
    {
      type: "category",
      label: "Knowledge Base",
      collapsed: true,
      className: "top-divider",
      items: [
        {
          type: "category",
          label: "Experiments",
          collapsed: false,
          items: [
            {
              type: "doc",
              id: "kb/experiments/troubleshooting-experiments",
              label: "Troubleshooting Experiments",
            },
            {
              type: "doc",
              id: "kb/experiments/aa-tests",
              label: "A/A Testing in GrowthBook",
            },
            {
              type: "doc",
              id: "kb/experiments/carryover-bias",
              label: "Carryover Bias",
            },
            {
              type: "doc",
              id: "kb/experiments/holdouts",
              label: "Holdouts in GrowthBook",
            },
          ],
        },
        {
          type: "category",
          label: "Metrics",
          collapsed: false,
          items: [
            {
              type: "doc",
              id: "kb/metrics/fact-metric-optimization",
              label: "Fact Metric Optimization",
            },
          ],
        },
        {
          type: "doc",
          id: "kb/glossary",
          label: "Glossary",
        },
      ],
    },
    {
      type: "category",
      label: "GrowthBook Guide",
      collapsed: true,
      className: "top-divider",
      link: {
        type: "doc",
        id: "using/index",
      },
      items: [
        {
          type: "doc",
          id: "using/fundamentals",
          label: "Fundamentals of AB testing",
        },
        {
          type: "doc",
          id: "using/experimentation-best-practices",
          label: "Best Practices",
        },
        {
          type: "doc",
          id: "using/experimentation-problems",
          label: "Common Problems",
        },
        {
          type: "doc",
          id: "using/product-development",
          label: "Experimentation in Product Development",
        },
        {
          type: "doc",
          id: "using/experimenting",
          label: "Experimenting in GrowthBook",
        },
        {
          type: "doc",
          id: "using/growthbook-best-practices",
          label: "Organizing GrowthBook",
        },
        {
          type: "doc",
          id: "using/security",
          label: "Securing GrowthBook",
        },
        {
          type: "doc",
          id: "using/programs",
          label: "Experimentation Programs",
        },
      ],
    },
  ],
};

module.exports = sidebars;
