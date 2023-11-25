'use strict'

import { Chance } from 'chance'
import Bling from './bling'
import { Borderos } from './entities/borderos'
import { CamposCustomizados } from './entities/camposCustomizados'
import { CategoriasLojas } from './entities/categoriasLojas'
import { CategoriasProdutos } from './entities/categoriasProdutos'
import { CategoriasReceitasDespesas } from './entities/categoriasReceitasDespesas'
import { ContasContabeis } from './entities/contasContabeis'
import { ContasPagar } from './entities/contasPagar'
import { ContasReceber } from './entities/contasReceber'
import { Contatos } from './entities/contatos'
import { ContatosTipos } from './entities/contatosTipos'
import { Contratos } from './entities/contratos'
import { Depositos } from './entities/depositos'
import { Empresas } from './entities/empresas'
import { Estoques } from './entities/estoques'

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

  it('should retrieve categorias - receitas e despesas entity', () => {
    expect(
      createBling(chance.word()).categoriasReceitasDespesas
    ).toBeInstanceOf(CategoriasReceitasDespesas)
  })

  it('should retrieve contas a pagar entity', () => {
    expect(createBling(chance.word()).contasPagar).toBeInstanceOf(ContasPagar)
  })

  it('should retrieve contas a receber entity', () => {
    expect(createBling(chance.word()).contasReceber).toBeInstanceOf(
      ContasReceber
    )
  })

  it('should retrieve contas contábeis entity', () => {
    expect(createBling(chance.word()).contasContabeis).toBeInstanceOf(
      ContasContabeis
    )
  })

  it('should retrieve contatos entity', () => {
    expect(createBling(chance.word()).contatos).toBeInstanceOf(Contatos)
  })

  it('should retrieve contatos - tipos entity', () => {
    expect(createBling(chance.word()).contatosTipos).toBeInstanceOf(
      ContatosTipos
    )
  })

  it('should retrieve contratos entity', () => {
    expect(createBling(chance.word()).contratos).toBeInstanceOf(Contratos)
  })

  it('should retrieve depósitos entity', () => {
    expect(createBling(chance.word()).depositos).toBeInstanceOf(Depositos)
  })

  it('should retrieve empresas entity', () => {
    expect(createBling(chance.word()).empresas).toBeInstanceOf(Empresas)
  })

  it('should retrieve estoques entity', () => {
    expect(createBling(chance.word()).estoques).toBeInstanceOf(Estoques)
  })
})
