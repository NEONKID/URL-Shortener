import { EntityRepository, Repository } from 'typeorm';
import { URL } from '../entities/url.entity';

@EntityRepository(URL)
export class URLRepository extends Repository<URL> {}
