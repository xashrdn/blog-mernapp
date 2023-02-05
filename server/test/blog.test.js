const supertest = require('supertest');
const app = require('../index');

jest.useRealTimers();
jest.setTimeout(20000);

describe('test blogs', () => {
    it('create blog test', async () => {
        const res = await supertest(app).post('/blog').send({
            publisher: 'khasha334545',
            title: 'Lols',
            paragraph:
                'I have been googling a lot but not getting proper solution. So, far I have tried following solutions:-1Increased jest.setTimeout30000 from 30000 to 60000.2Tried using jest- testRunner jest-circusrunner',
            image: '12.png',
            userId: '63df547e7bc0597fd92c1b90',
        });
        expect(res.statusCode).toEqual(201);
    });

    it('get all blogs test', async () => {
        const res = await supertest(app).get('/blogs');
        expect(res.statusCode).toEqual(200);
    });

    it('get blog', async () => {
        const res = await supertest(app).get('/blog/63d5413d6746f0f809ddf0ad');
        expect(res.statusCode).toEqual(200);
    });
});
