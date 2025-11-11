import {faker} from '@faker-js/faker/locale/en'

export const createRandomMovie = () => {
  return `${faker.word.adjective()} ${faker.word.noun()}`
}

export const createRandomSong = () => {
  return faker.music.songName()
}
