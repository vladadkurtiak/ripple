import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ENVIRONMENT } from "./config/environment";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(ENVIRONMENT.PORT, () => {
    console.log(`Server started on port ${ENVIRONMENT.PORT}`);
  });
}
bootstrap();
