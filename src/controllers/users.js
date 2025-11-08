let users = [];

export function welcome(req, res) {
  return res.status(200).json("Seja bem vindo a minha api...");
}

export function createUser(req, res) {
  const { name, age } = req.body;

  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    age,
  };
  users.push(newUser);

  return res.status(201).json(newUser);
}

export function getUsers(req, res) {
  return res.status(200).json(users);
}

export function getUserId(req, res) {
  const currentUser = users.find((user) => user.id === parseInt(req.params.id));

  if (!currentUser) res.status(404).json("Não foi encontrado nenhum usuário.");

  return res.status(200).json(currentUser);
}

export function deleteUser(req, res) {
  const index = users.findIndex((user) => user.id === parseInt(req.params.id));

  if (index === -1) res.status(404).json("Não foi encontrado nenhum usuário.");

  users.splice(0, index);

  return res.status(200).json("Usuário excluido com sucesso!");
}

export function updateUser(req, res) {
  const { age, name } = req.body;

  const index = users.findIndex((user) => user.id === parseInt(req.params.id));

  if (index === -1) res.status(404).json("Não foi encontrado nenhum usuário.");

  const updatedUser = {
    id: users[index].id,
    age,
    name,
  };

  users[index] = updatedUser;

  return res.status(200).json(updatedUser);
}
