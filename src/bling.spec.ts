'use strict'

import { Chance } from 'chance'
import Bling from './bling'
import { Borderos } from './entities/borderos'
import { CamposCustomizados } from './entities/camposCustomizados'
import { CategoriasLojas } from './entities/categoriasLojas'
import { CategoriasProdutos } from './entities/categoriasProdutos'

const chance = Chance()

const createBling = (accessToken: string) => {
  return new Bling(accessToken)
}

describe('Bling main module', () => {
  it('should instantiate correctly', () => {
    expect(createBling(chance.word())).toBeInstanceOf(Bling)
  })

  it('should retrieve borderôs entity', () => {
    expect(createBling(chance.word()).borderos).toBeInstanceOf(Borderos)
  })

  it('should retrieve campos customizados entity', () => {
    expect(createBling(chance.word()).camposCustomizados).toBeInstanceOf(
      CamposCustomizados
    )
  })

  it('should retrieve categorias - lojas entity', () => {
    expect(createBling(chance.word()).categoriasLojas).toBeInstanceOf(
      CategoriasLojas
    )
  })

  it('should retrieve categorias - produtos entity', () => {
    expect(createBling(chance.word()).categoriasProdutos).toBeInstanceOf(
      CategoriasProdutos
    )
  })
})
