import prismaClient from "../../../prisma";

interface AuthUserRequest{
    email: string;
    password: string;
}

class AuthUserService{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async execute({email, password}: AuthUserRequest) {
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if(!user) {
            throw new Error("Email/Password incorrect");
        }

        return user;
    }
}

export { AuthUserService }