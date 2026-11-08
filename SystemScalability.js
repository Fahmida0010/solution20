// ধরো, তুমি একটি website তৈরি করেছ। তোমার website বর্তমানে 500 concurrent users handle করতে পারে।

// হঠাৎ একদিন 5,000 users একসঙ্গে website-এ প্রবেশ করল।

// তখন কী হবে?

// সম্ভাব্য সমস্যা:
// 1. Website slow হয়ে যেতে পারে।
// 2. Server CPU এবং RAM অতিরিক্ত ব্যবহার হতে পারে।
// 3. Database-এর ওপর অতিরিক্ত load পড়তে পারে।
// 4. API response time বেড়ে যেতে পারে।
// 5. Server crash করতে পারে।
// 6. Users timeout বা error দেখতে পারে।

// What is Load Balancing?
// Load balancing means distributing incoming traffic 
// across multiple servers to prevent a single server from 
// becoming overloaded.

// বাংলায়: ধরো, 5,000 users একসঙ্গে website-এ আসছে। সব request একটি server-এ না পাঠিয়ে একাধিক server-এ ভাগ করে দেব।

// Example:
// - Server 1 → 1,700 requests
// - Server 2 → 1,650 requests
// - Server 3 → 1,650 requests

// Interview Answer:

// "I would introduce a load balancer to distribute incoming traffic across multiple backend instances. 
// This prevents a single server from handling all requests and improves availability and performance."

// Interview Answer:

// "I would prefer horizontal scaling because I can add more backend instances as traffic increases.
//  It also improves availability because the application does not depend on a single server."


// Example: Database Indexing

// ধরো, তোমার PostgreSQL database-এ 1 million users আছে।

// তুমি email দিয়ে user খুঁজছ:
// SELECT * FROM users
// WHERE email = 'test@gmail.com';


// Email column-এ suitable index থাকলে search দ্রুত হতে পারে।
// CREATE INDEX idx_users_email
// ON users(email);


// মনে রাখবে, indexing সব query-কে automatically fast করে না। অতিরিক্ত index write performance কমাতে পারে।

// Interview Answer:

// "I would optimize database queries, create indexes on frequently searched columns, implement pagination, 
// and use connection pooling. If read traffic becomes very high, I would consider read replicas."
// D. Redis Caching
// এটি Full Stack interview-এর খুব common question।

// What is caching?

// Caching means temporarily storing frequently accessed data so that we don't need to fetch it from
// the database every time.


// First, I would identify whether the 5,000 users are concurrent users or total users.

// If they are 5,000 concurrent users, I would focus on scaling the application and preventing server overload.

// My approach would be:

// 1. **Load Balancing:** I would distribute incoming traffic across multiple backend instances instead of relying on a single server.

// 2. **Horizontal Scaling:** I would add more backend instances to handle increased traffic.

// 3. **Redis Caching:** I would cache frequently accessed data to reduce unnecessary database queries.

// 4. **Database Optimization:** I would use proper indexing, pagination, query optimization, and connection pooling.

// 5. **CDN:** I would serve static assets such as images, CSS, and JavaScript through a CDN.

// 6. **Rate Limiting:** I would protect the APIs from excessive requests.

// 7. **Monitoring and Auto Scaling:** I would monitor CPU, memory, response time, and error rates. Based on traffic, I would configure auto-scaling to add more server instances.

// Finally, I would perform load testing before production deployment to identify bottlenecks and verify whether the system can handle the expected traffic.

// My goal would be to maintain performance, availability, and a good user experience even during sudden traffic spikes.
