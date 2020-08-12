import { Usuario } from './usuario';
import { Tweet } from './tweet';

export class Comentario {
  id: number;
  conteudo: string;
  data: Date;
  tweet: Tweet;
  usuario: Usuario;
}
