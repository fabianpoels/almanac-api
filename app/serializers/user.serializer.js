const UserSerializer = {
  serialize: (user, options) => ({
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    role: user.role,
  }),
}

export default UserSerializer
