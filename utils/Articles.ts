export type Article = {
  title: string;
  subtitle: string;
  link: string;
};

export type ArticleCategories = {
  category: string,
  articles: Article[]
};



export const AWS_ARTICLES: Article[] = [
  {
    title: "AWS Notes",
    subtitle: "In this post, I will share few of my notes that might be useful if you are preparing to get the AWS Solution Architect Certification.",
    link: "https://github.com/rgyani/aws-notes#readme"
  },
  {
    title: "AWS News",
    subtitle: "AWS has  over 200+ services, and is continuously releasing/updating existing service, it sometimes becomes difficult to track the updates. Here I am keeping some notes on some services I use and track",
    link: "https://github.com/rgyani/aws-news#readme"
  },
  {
    title: "AWS Services Comparison",
    link: "https://github.com/rgyani/aws-services-comparison#readme",
    subtitle: "My notes from around the web on comparison between various AWS services"
  },
  {
    title: "AWS Lambda Function URLs",
    link: "https://github.com/rgyani/aws-lambda-function-url#readme",
    subtitle: "AWS Introduced Lambda function URLs, but needs SigV4 to be able to invoke them securely"
  },
  {
    title: "AWS Session Manager port forwarding",
    link: "https://github.com/rgyani/aws-session-manager-port-forwarding#readme",
    subtitle: "Use Systems Manager Session Manager port forwarding to connect to EC2 instance through RDP"
  },
  {
    title: "AWS DynamoDB",
    link: "https://github.com/rgyani/aws-dynamodb#readme",
    subtitle: "My notes on DynamoDB"
  },
  {
    title: "AWS IAM: Fine-Grained Authorization",
    link: "https://github.com/rgyani/aws-fine-grained-authorization#readme",
    subtitle: "AWS IAM uses Fine-Grained Authorization. Also explore whats the difference between RBAC, ABAC"
  },
  {
    title: "AWS EBS notes",
    link: "https://github.com/rgyani/aws-ebs-notes#readme",
    subtitle: "My notes on AWS EBS, provisioning, performance and credits"
  },
  {
    title: "Atomic Counters in AWS",
    link: "https://github.com/rgyani/system-design-examples/blob/main/atomic-counter.md",
    subtitle: "How to implement Atomic Counters using AWS Services"
  },
  {
    title: "Serverless website using S3",
    link: "https://github.com/rgyani/aws-serverless-website-using-s3#readme",
    subtitle: "How to replace traditional LAMP stack with Serverless"
  },
  {
    title: "EC2 Spot instances",
    link: "https://github.com/rgyani/aws-ec2-spot-instances#readme",
    subtitle: "My notes on EC2 spot instances"
  },
  {
    title: "VPC Endpoints",
    link: "https://github.com/rgyani/aws-vpc-endpoints#readme",
    subtitle: "VPC Gateway Endpoints vs VPC Interface Endpoints"
  },
  {
    title: "Security in VPC",
    link: "https://github.com/rgyani/aws-vpc-security#readme",
    subtitle: "Security Group, NACL, Route Tables"
  },
  {
    title: "AWS Cognito",
    link: "https://github.com/rgyani/aws-cognito#readme",
    subtitle: "AWS Cognito notes"
  },
  {
    title: "AWS Neptune",
    link: "https://github.com/rgyani/aws-neptune#readme",
    subtitle: "AWS Neptune notes"
  },
  {
    title: "API Gateway Direct Integration with DynamoDB",
    link: "https://github.com/rgyani/aws-api-gateway-direct-integration-dynamodb#readme",
    subtitle: "Lessons learnt while integrating API g/w directly with DynamoDB"
  },
  {
    title: "AWS KMS Notes",
    subtitle: "My Notes while understanding the AWS KMS.",
    link: "https://github.com/rgyani/aws-kms#readme"
  },
  {
    title: "AWS Incident Response",
    subtitle: "My Notes while studying for AWS Certified Security Specialty",
    link: "https://github.com/rgyani/aws-incident-response#readme"
  },
  {
    title: "AWS STS",
    subtitle: "Never put AWS temporary credentials in the credentials file (or env vars) — use AWS STS",
    link: "https://github.com/rgyani/aws-sts#readme"
  },
  {
    title: "AWS Lambda Error Handling",
    subtitle: "Exploring the best practices for error handling in AWS Lambda",
    link: "https://github.com/rgyani/lambda-error-handling#readme"
  },
  {
    title: "Machine-to-Machine communication over AWS Network",
    subtitle: "Exploring system designs for Chat, Video Stream, Sensor Data collection",
    link: "https://github.com/rgyani/m2m-over-aws#readme"
  },
  {
    title: "AWS Migration Services",
    subtitle: "My notes on the various AWS services for migration from on-prem to AWS cloud",
    link: "https://github.com/rgyani/aws-migration-notes#readme"
  },
  {
    title: "Terraform Notes",
    subtitle: "My notes on terraform",
    link: "https://github.com/rgyani/terraform-notes#readme"
  },
];

export const MICROSERVICES_ARTICLES: Article[] = [
  {
    title: "Microservices Design Patterns",
    link: "https://github.com/rgyani/microservice-patterns/#readme",
    subtitle: "How, When and Which Microservices Design Patterns to use."
  },
  {
    title: "API Gateways vs Service Mesh",
    link: "https://github.com/rgyani/api-gateway-vs-service-mesh/#readme",
    subtitle: "API Gateways for North-South traffic and Service Mesh for East-West traffic. Really?"
  },
  {
    title: "Evolution of backend architectures",
    link: "https://github.com/rgyani/backend-architecture-evolution/#readme",
    subtitle: "Backend architectures (N-layered, DDD, Hexagon, Onion) evolution"
  },
  {
    title: "System Design Examples",
    link: "https://github.com/rgyani/system-design-examples/#readme",
    subtitle: "My notes and approches to System Design."
  },
  {
    title: "Deployment Strategies",
    link: "https://github.com/rgyani/deployment-strategies/#readme",
    subtitle: "Consider the various Deployment strategies to upgrade a running instance of an application."
  },
  {
    title: "Docker - Notes",
    link: "https://github.com/rgyani/docker-notes/#readme",
    subtitle: "My notes about docker images."
  },
  {
    title: "Observability",
    link: "https://github.com/rgyani/observability-stack/#readme",
    subtitle: "keep track of system and application health and performance using traces, metrics and logging"
  }
];

export const BIG_DATA_ARTICLES: Article[] = [
  {
    title: "Kafka vs Kinesis",
    link: "https://github.com/rgyani/kafka-vs-kinesis/#readme",
    subtitle: "Analyze the internals and differences between the Apache Kafka vs Amazon Kinesis. And also, Redis pub/sub"
  },
  {
    title: "Big Data Write Path",
    link: "https://github.com/rgyani/write-path/#readme",
    subtitle: "Analyze the read-write path of HDFS, HBase, Kafka, Zookeeper, Cassandra."
  },
  {
    title: "Big Data Streaming Options",
    link: "https://github.com/rgyani/streaming-options/#readme",
    subtitle: "Lets consider the various streaming options available in Big Data"
  },
  {
    title: "Fraud Detection with Kafka",
    link: "https://github.com/rgyani/fraud-detection-with-kafka/#readme",
    subtitle: "Lambda vs Kappa Architecture and Fraud Detection with Apache Kafka, KSQL"
  },
  {
    title: "Hadoop, Hbase, YARN notes",
    link: "https://github.com/rgyani/hadoop-hbase-notes/#readme",
    subtitle: "My notes collected over the years on Hadoop, Hbase and YARN"
  },
  {
    title: "Data Lake vs Data Warehouse",
    link: "https://github.com/rgyani/data-lake-vs-data-warehouse/#readme",
    subtitle: "Understanding when to use a database, data lake, or data warehouse."
  },
  {
    title: "Kubernetes Notes",
    link: "https://github.com/rgyani/kubernetes-notes/#readme",
    subtitle: "Understanding the Kubernetes Terminology"
  },
  {
    title: "Checking Elements in Big Data",
    link: "https://github.com/rgyani/if-exists-check/#readme",
    subtitle: "HashMaps, Bloom Filters, Count-Min sketch etc"
  },
  {
    title: "Interesting Concepts in Big Data",
    link: "https://github.com/rgyani/interesting-concepts-in-bigdata/#readme",
    subtitle: "Consistent Hashing, GeoHashes, Consensus Protocols (Paxos, Raft, Gossip), B-tree and LSM-tree"
  },
  {
    title: "Postgres vs MySQL",
    link: "https://github.com/rgyani/sql-tech-comparison/#readme",
    subtitle: "A Shallow Dive into the internals of MySQL vs Postgres"
  },
];

export const JAVA_ARTICLES: Article[] = [
  {
    title: "Java Versions",
    link: "https://github.com/rgyani/java-versions/#readme",
    subtitle: "Lets evaluate the various Java versions and the differences between them"
  },
  {
    title: "Java Threading",
    link: "https://github.com/rgyani/java-threading-notes/#readme",
    subtitle: "Lets overview java threading concepts",
  },
  {
    title: "Java 19 - Virtual Threads- Project Loom",
    link: "https://github.com/rgyani/java19-virtual-threads/#readme",
    subtitle: "Virtual threads are a lightweight implementation of Java threads, delivered as a preview feature in Java 19"
  },
  {
    title: "Java Memory Management",
    link: "https://github.com/rgyani/java-memory-management/#readme",
    subtitle: "Java memory management notes"
  },
];

export const PYTHON_ARTICLES: Article[] = [
  {
    title: "Python threading",
    link: "https://github.com/rgyani/python-threading/#readme",
    subtitle: "Demystifying Python Multiprocessing and Multithreading and the Global Interpreter Lock"
  },
  {
    title: "Python Memory Management",
    link: "https://github.com/rgyani/python-memory-management/#readme",
    subtitle: "Reference Counting and Generational Garbage Collection"
  }
];


export const HTTP_ARTICLES: Article[] = [
  {
    title: "What happens when you type a URL into your browser?",
    link: "https://github.com/rgyani/http-notes/#readme",
    subtitle: "Lets discuss DNS, SSL, HTTP v1, v1.1, v2, v3, CORS, HTTPS etc"
  },
  {
    title: "How does real time bidding for Ads work?",
    link: "https://github.com/rgyani/ad-tech/#readme",
    subtitle: "When you access a website, the display ads you see, how are they chosen?"
  },
  {
    title: "TCP vs UDP?",
    link: "https://github.com/rgyani/tcp-vs-udp/#readme",
    subtitle: "lossless or lossy?"
  },
  {
    title: "User Identity Management",
    link: "https://github.com/rgyani/user-identity-management#readme",
    subtitle: "Session, cookie, JWT, token, SSO, OAuth 2.0, SAML"
  },
  {
    title: "SQL operations",
    link: "https://github.com/rgyani/sql-notes#readme",
    subtitle: "Leetcode SQL interview questions"
  },

];

export const ALGORITHMS_ARTICLES: Article[] = [
  { title: "Expressions Evaluator", link: "https://github.com/rgyani/expression-evaluator/#readme", subtitle: "How to calculate '-1 + (2 + 3)' programmatically" },
  { title: "Regular Expression Evaluator", link: "https://github.com/rgyani/regexp/#readme", subtitle: "How to match 'a*b.*c' to 'basic' programmatically" },
  { title: "Sudoku Solver", link: "https://github.com/rgyani/sudoku-solver/#readme", subtitle: "How to solve a Sudoku programmatically using backtracking" },
  { title: "Nonogram Solver", link: "https://github.com/rgyani/nonograms/#readme", subtitle: "How to solve nonogram puzzles programmatically using backtracking" },
  { title: "Mobile Number Keypad problem", link: "https://github.com/rgyani/mobile-number-keypad-problem/#readme", subtitle: "Solve the popular interview question in which for a given N, and the mobile numeric keypad, we have to find the number of possible numbers " },
  { title: "Equal Subset Sum Partition", link: "https://github.com/rgyani/equal-subset-sum-partition/#readme", subtitle: "Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both the subsets is equal." },
  { title: "Open the Lock", link: "https://github.com/rgyani/open-lock-bfs/#readme", subtitle: "Given a lock with N circular wheels, containing slots from '0' to '9'. Find the minimum turns required to open the lock." },
  { title: "Graph Traversal", link: "https://github.com/rgyani/graph-traversal/#readme", subtitle: "Graph Traversal (also known as Graph Search) refers to the process of visiting (checking and/or updating) each vertex in a graph." },
  { title: "Find cycles in a directed graph", link: "https://github.com/rgyani/daily-coding-problem-1206/#readme", subtitle: "Daily Coding Problem 1206, Find cycles in a directed graph" },
  { title: "Find the length of the longest palindromic subsequence in a string", link: "https://github.com/rgyani/longest-palindromic-substring#readme", subtitle: "Dynamic Programming approach" }
];

export const ARTICLES: ArticleCategories[] = [
  { category: "AWS", articles: AWS_ARTICLES },
  { category: "Microservices", articles: MICROSERVICES_ARTICLES },
  { category: "Big Data", articles: BIG_DATA_ARTICLES },
  { category: "Java Notes", articles: JAVA_ARTICLES },
  { category: "Python Notes", articles: PYTHON_ARTICLES },
  { category: "HTTP", articles: HTTP_ARTICLES },
  { category: "Algorithms", articles: ALGORITHMS_ARTICLES }
]