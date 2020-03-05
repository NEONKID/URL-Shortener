import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { AppModule } from '../src/modules/app.module';
import { URLRepository } from '../src/db/entities/url.repositroy';

describe('URL-Shortener Test', () => {
    let app: INestApplication;
    let repo: URLRepository;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        repo = moduleFixture.get<URLRepository>(URLRepository);

        await app.init();
    });

    it('Main Endpoint test', done => {
        return request(app.getHttpServer())
            .get('/')
            .expect(301)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    it('URL Endpoint test', done => {
        return request(app.getHttpServer())
            .get('/api/url')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).toBe("Hi i'm URL-Shortener URL API, Please Shortcut URL ID me");
                return done();
            });
    });

    it('URL Register Test', done => {
        return request(app.getHttpServer())
            .post('/api/url/register')
            .send({ url: 'https://neonkid.xyz' })
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    it('URL Redirect Test', done => {
        return request(app.getHttpServer())
            .get('/1')
            .expect(302)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });

    afterAll(async done => {
        await repo.query(`DROP TABLE url;`);
        await app.close();

        done();
    });
});
