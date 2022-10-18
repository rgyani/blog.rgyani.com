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
    title: "AWS Services Comparison",
    link: "https://github.com/rgyani/aws-services-comparison#readme",
    subtitle: "My notes from around the web on comparison between various AWS services"
  },
  {
    title: "AWS DynamoDB",
    link: "https://github.com/rgyani/dynamodb#readme",
    subtitle: "My notes on DynamoDB"
  }
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
    title: "System Design Examples",
    link: "https://github.com/rgyani/system-design-examples/#readme",
    subtitle: "How to crack the System Design Interview section in interviews."
  },
  {
    title: "Deployment Strategies",
    link: "https://github.com/rgyani/deployment-strategies/#readme",
    subtitle: "Consider the various Deployment strategies to upgrade a running instance of an application."
  }
];

export const BIG_DATA_ARTICLES: Article[] = [
  {
    title: "Kafka vs Kinesis",
    link: "https://github.com/rgyani/kafka-vs-kinesis/#readme",
    subtitle: "Analyse the internals and differences between the Apache Kafka vs Amazon Kinesis."
  },
  {
    title: "Big Data Write Path",
    link: "https://github.com/rgyani/write-path/#readme",
    subtitle: "Analyse the read-write path of HDFS, HBase, Kafka, Zookeeper, Cassandra."
  },
  {
    title: "Big Data Streaming Options",
    link: "https://github.com/rgyani/streaming-options/#readme",
    subtitle: "Lets consider the various streaming options available in Big Data"
  },
  {
    title: "Hadoop, Hbase, YARN notes",
    link: "https://github.com/rgyani/hadoop-hbase-nodes/#readme",
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
    subtitle: "Understanding the Kubernetes Terminology ."
  },
  {
    title: "Checking Elements in Big Data",
    link: "https://github.com/rgyani/if-exists-check/#readme",
    subtitle: "HashMaps, Bloom Filters, Count-Min sketch etc"
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
    title: "Python threading",
    link: "https://github.com/rgyani/python-threading/#readme",
    subtitle: "Demystifying Python Multiprocessing and Multithreading and the Global Interpreter Lock"
  },
];


export const HTTP_ARTICLES: Article[] = [
  {
    title: "What happens when you type a URL into your browser?",
    link: "https://github.com/rgyani/http-notes/#readme",
    subtitle: "Lets discuss DNS, SSL, HTTP v1, v1.1, v2, v3 etc"
  },
  {
    title: "How does real time bidding for Ads work?",
    link: "https://github.com/rgyani/ad-tech/#readme",
    subtitle: "When you access a website, the display ads you see, how are they choosen?"
  },
  {
    title: "TCP vs UDP?",
    link: "https://github.com/rgyani/tcp-vs-udp/#readme",
    subtitle: "lossless or lossy?"
  },
  {
    title: "SQL operations",
    link: "https://dsfaisal.com/articles/2020-11-06-leetcode-sql-problem-solving/",
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
  { title: "Find cycles in a directed graph", link: "https://github.com/rgyani/daily-coding-problem-1206/#readme", subtitle: "Daily Coding Problem 1206, Find cycles in a directed graph" }
];

export const ARTICLES: ArticleCategories[] = [
  { category: "AWS", articles: AWS_ARTICLES },
  { category: "Microservices", articles: MICROSERVICES_ARTICLES },
  { category: "Big Data", articles: BIG_DATA_ARTICLES },
  { category: "Java and Python", articles: JAVA_ARTICLES },
  { category: "HTTP", articles: HTTP_ARTICLES },
  { category: "Algorithms", articles: ALGORITHMS_ARTICLES }
]