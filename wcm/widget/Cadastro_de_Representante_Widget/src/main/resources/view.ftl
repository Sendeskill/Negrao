<div class="fluig-style-guide" id="fluig-style-guide">
    <form name="form" role="form">
        <div class="container-fluid">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3">
                            <button type="button" class="btn btn-success" id="btn_envia">Enviar Formulário</button>
                        </div>
                    </div>
                    <br>
                    <ul class="nav nav-tabs" role="tablist">
                        <li><a href="#tab_auth" id="toggle_auth" data-toggle="tab">Autenticação</a>
                        </li>
                        <li><a href="#tab_representante" id="toggle_representante" data-toggle="tab">Representante</a>
                        </li>
                        <li><a href="#tab_dados" id="toggle_dados" data-toggle="tab">Outros Dados</a></li>
                        <li><a href="#tab_documentos" id="toggle_documentos" data-toggle="tab">Documentos</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab_auth" class="tab-pane">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="num_processo">Num. Processo</label>
                                    <input type="text" name="num_processo" class="form-control" id="num_processo">
                                </div>
                                <div class="col-md-9">
                                    <label for="auth">Autenticação</label>
                                    <input type="text" name="auth" class="form-control" id="auth">
                                </div>
                            </div>
                        </div>
                        <div id="tab_representante" class="tab-pane">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="representante_cpf">CPF</label>
                                    <input type="text" name="representante_cpf" id="representante_cpf"
                                        class="form-control" mask="000.000.000-00">
                                </div>
                                <div class="col-md-9">
                                    <label for="representante_nome">Nome</label>
                                    <input type="text" name="representante_nome" id="representante_nome"
                                        class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="representante_nascimento">Nascimento</label>
                                    <input type="text" name="representante_nascimento" id="representante_nascimento"
                                        class="form-control date-picker">
                                </div>
                                <div class="col-md-3">
                                    <label for="representante_rg">RG</label>
                                    <input type="text" name="representante_rg" id="representante_rg"
                                        class="form-control">
                                </div>
                                <div class="col-md-3">
                                    <label for="representante_org_expedidor">Orgão Expedidor</label>
                                    <input type="text" name="representante_org_expedidor"
                                        id="representante_org_expedidor" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="representante_email">E-mail</label>
                                    <input type="text" name="representante_email" id="representante_email"
                                        class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="representante_telefone">Telefone</label>
                                    <input type="text" name="representante_telefone" id="representante_telefone"
                                        class="form-control">
                                </div>
                                <div class="col-md-6">
                                    <label for="representante_celular">Celular</label>
                                    <input type="text" name="representante_celular" id="representante_celular"
                                        class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="representante_num_core">Número CORE</label>
                                    <input type="text" name="representante_num_core" id="representante_num_core"
                                        class="form-control">
                                </div>
                                <div class="col-md-3">
                                    <label for="representante_uf_core">UF CORE</label>
                                    <input type="text" name="representante_uf_core" id="representante_uf_core"
                                        class="form-control" mask="AA">
                                </div>
                                <div class="col-md-3">
                                    <label for="representante_emissao_core">Emissão CORE</label>
                                    <input type="text" name="representante_emissao_core" id="representante_emissao_core"
                                        class="form-control date-picker">
                                </div>
                                <div class="col-md-3">
                                    <label for="representante_validade_core">Validade CORE</label>
                                    <input type="text" name="representante_validade_core"
                                        id="representante_validade_core" class="form-control date-picker">
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-12">
                                    <h5>Endereço para Correspondência</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="representante_cep">CEP</label>
                                    <input type="text" name="representante_cep" id="representante_cep"
                                        class="form-control">
                                </div>
                                <div class="col-md-9">
                                    <label for="representante_logradouro">Logradouro</label>
                                    <input type="text" name="representante_logradouro" id="representante_logradouro"
                                        class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="representante_complemento">Complemento</label>
                                    <input type="text" name="representante_complemento" id="representante_complemento"
                                        class="form-control">
                                </div>
                                <div class="col-md-2">
                                    <label for="representante_numero">Número</label>
                                    <input type="text" name="representante_numero" id="representante_numero"
                                        class="form-control">
                                </div>
                                <div class="col-md-1">
                                    <label for="representante_uf">UF</label>
                                    <input type="text" name="representante_uf" id="representante_uf"
                                        class="form-control">
                                </div>
                                <div class="col-md-3">
                                    <label for="representante_bairro">Bairro</label>
                                    <input type="text" name="representante_bairro" id="representante_bairro"
                                        class="form-control">
                                </div>
                                <div class="col-md-3">
                                    <label for="representante_cidade">Cidade</label>
                                    <input type="text" name="representante_cidade" id="representante_cidade"
                                        class="form-control">
                                </div>
                            </div>
                        </div>
                        <div id="tab_dados" class="tab-pane">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="dados_banco">Banco</label>
                                    <input type="text" name="dados_banco" id="dados_banco" class="form-control">
                                </div>
                                <div class="col-md-3">
                                    <label for="dados_agencia">Agência</label>
                                    <input type="text" name="dados_agencia" id="dados_agencia" class="form-control">
                                </div>
                                <div class="col-md-3">
                                    <label for="dados_conta">Conta</label>
                                    <input type="text" name="dados_conta" id="dados_conta" class="form-control">
                                </div>
                                <div class="col-md-3">
                                    <label for="dados_operacao">Operação</label>
                                    <input type="text" name="dados_operacao" id="dados_operacao" class="form-control">
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <div class="col-md-12">
                                    <h5>Tipo de Conta</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="custom-radio custom-radio-inline custom-radio-primary">
                                        <input type="radio" name="empresa_radio" id="dados_tipo_conta">
                                        <label for="dados_tipo_conta">Conta Corrente</label>
                                    </div>
                                    <div class="custom-radio custom-radio-inline custom-radio-primary">
                                        <input type="radio" name="empresa_radio" id="dados_tipo_conta_radio">
                                        <label for="dados_tipo_conta_radio">Poupança</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p>
                                        <strong>Observação:</strong>
                                        Somente conta de Pessoa Juridica,
                                        de
                                        preferência nos bancos
                                        Caixa Econômica Federal, Banco do Brasil, Bradesco, Itaú ou Barrisul(RS)
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h5>Contador</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="dados_cpf">CPF</label>
                                    <input type="text" name="dados_cpf" id="dados_cpf" class="form-control"
                                        mask="000.000.000-00">
                                </div>
                                <div class="col-md-6">
                                    <label for="dados_nome">Nome Completo</label>
                                    <input type="text" name="dados_nome" id="dados_nome" class="form-control">
                                </div>
                                <div class="col-md-3">
                                    <label for="dados_crc">CRC</label>
                                    <input type="text" name="dados_crc" id="dados_crc" class="form-control">
                                </div>
                            </div>
                            <br>
                            <!-- <div class="row">
                                <div class="col-md-12">
                                    <h5>Para uso Interno</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-9">
                                    <label for="dados_empresa">Empresa</label>
                                    <input type="text" name="dados_empresa" id="dados_empresa" class="form-control"
                                        readonly>
                                </div>
                                <div class="col-md-3">
                                    <label for="dados_macro_regial">Macro Região</label>
                                    <input type="text" name="dados_macro_regial" id="dados_macro_regial"
                                        class="form-control" readonly>
                                </div>
                            </div> -->
                        </div>
                        <div id="tab_documentos" class="tab-pane">
                            <div class="row">
                                <div class="col-md-6">
                                    <string>Carta de Solicitação</string>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <string>Documento de Identificação do Representante</string>
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn btn-info">Anexar</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <string>Documento Bancário</string>
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn btn-info">Anexar</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <string>Core do Representante</string>
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn btn-info">Anexar</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <string>Core da Empresa</string>
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn btn-info">Anexar</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <string>Inscrição Municipal ou Alvará</string>
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn btn-info">Anexar</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <string>Contrato Social</string>
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn btn-info">Anexar</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <string>Comprovante de endereço para correspondência</string>
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn btn-info">Anexar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>