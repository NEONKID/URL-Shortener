import { EntityRepository, Repository } from 'typeorm';
import { URL } from './url.entity';

@EntityRepository(URL)
export class URLRepository extends Repository<URL> {}
