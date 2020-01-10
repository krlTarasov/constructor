export default function Character(name, type) {
  if (name.length < 2 || name.length > 10) throw new Error('Incorrect name');
  if (!(['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type))) throw new Error('Incorrect class');
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  const stats = {
    Bowman: {
      attack: 25,
      defence: 25,
    },
    Swordsman: {
      attack: 40,
      defence: 10,
    },
    Magician: {
      attack: 10,
      defence: 40,
    },
    Undead: {
      attack: 25,
      defence: 25,
    },
    Zombie: {
      attack: 40,
      defence: 10,
    },
    Daemon: {
      attack: 10,
      defence: 40,
    },
  };
  this.attack = stats[type].attack;
  this.defence = stats[type].defence;
}
