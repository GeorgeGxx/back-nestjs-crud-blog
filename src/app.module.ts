import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//   imports: [UsersModule, PostsModule,
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: 'password',
//       database: 'blog-nestjs',
//       autoLoadEntities: true,
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       synchronize: true,
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })

@Module({
  imports: [
    UsersModule,
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      //url: process.env.DB_URL,
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
