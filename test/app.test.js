const request = require('supertest');
const app = require('../index');

describe('API Endpoints', () => {
  test('GET / should return welcome message', async () => {
    const res = await request(app)
      .get('/')
      .expect(200);
    
    expect(res.body.message).toBe('Welcome to MERN CI/CD Pipeline Demo');
    expect(res.body.version).toBe('1.0.0');
    expect(res.body.timestamp).toBeDefined();
  });

  test('GET /health should return health status', async () => {
    const res = await request(app)
      .get('/health')
      .expect(200);
    
    expect(res.body.status).toBe('healthy');
    expect(res.body.uptime).toBeDefined();
    expect(res.body.timestamp).toBeDefined();
  });

  test('GET /api/users should return mock users', async () => {
    const res = await request(app)
      .get('/api/users')
      .expect(200);
    
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(3);
    expect(res.body[0]).toHaveProperty('id');
    expect(res.body[0]).toHaveProperty('name');
    expect(res.body[0]).toHaveProperty('email');
  });
});
