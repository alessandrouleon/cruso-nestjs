interface CreateUserDTO {
  name: string;
  username: string;
  email: string;
  password: string;
}
export class CreateUserUseCase {
  async execute(data: CreateUserDTO) {}
}
