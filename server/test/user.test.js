const supertest = require('supertest');
const app = require('../index');

jest.useRealTimers();
jest.setTimeout(20000);

describe('test users', () => {
    it('create user test', async () => {
        const res = await supertest(app).post('/auth/register').send({
            firstName: 'khasha334545',
            lastName: 'nmsdsd3443',
            password: 'genz693234',
            email: 'hi11@gmail.com',
        });
        expect(res.statusCode).toEqual(201);
    });

    it('login user test', async () => {
        const res = await supertest(app).post('/auth/login').send({
            password: 'zxcvbnm',
            email: 'khasherdenex@gmail.com',
        });
        expect(res.statusCode).toEqual(200);
    });
});
