

const app = require('../index');

beforeEach(() => {
    products = [
        { id: 1, name: 'Laptop', price: 1000.0 },
        { id: 2, name: 'Smartphone', price: 800.0 }
    ];




    test('GET /api/products should return product list', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(products);
    });