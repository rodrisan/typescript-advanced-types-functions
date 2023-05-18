enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
}

const roUser: User = {
  username: 'Rod',
  role: ROLES.ADMIN
}
