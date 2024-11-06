export interface IStudentFilterParams {
  id_instancia: number;
  id_ano_letivo: number;
  order?: string;
  initial_row?: number;
  final_row?: number;
  situacao?: string;
  name?: string;
  matricula?: string;
}

export interface IStudent {
  Ano?: number;
  Escola?: string;
  Matricula?: number;
  Nome?: string;
  Responsavel?: string;
  Serie?: string;
  Situacao?: string;
  Turma?: string;
  bairro?: string;
  certidao_cartorio?: string;
  certidao_nascimento?: string;
  check_acompanhamento_medico?: number;
  check_aee?: number;
  check_alergia?: number;
  check_certidao_antiga?: number;
  check_direito_imagem?: number;
  check_disturbio?: number;
  check_medicacao?: number;
  check_pcd?: number;
  check_restricao_alimentar?: number;
  check_restricao_atv_fisica?: number;
  check_transporte_escolar?: number;
  cpf?: string;
  data_expedicao_certidao?: string;
  data_nascimento?: string;
  endereco?: string;
  foto?: string;
  id_censo?: number;
  id_cidade?: number;
  id_instancia?: number;
  id_moradia?: number;
  id_situacao_aluno?: number;
  instrucoes_disturbio?: string;
  mae_cpf?: string;
  mae_nome?: string;
  mae_rg?: string;
  mae_telefone?: string;
  naturalidade?: string;
  num_nis?: string;
  num_sus?: string;
  obs_acompanhamento_medico?: string | null;
  obs_alergia?: string | null;
  obs_disturbio?: string;
  obs_medicacao?: string;
  obs_pcd?: string;
  obs_restricao_alimentar?: string | null;
  obs_restricao_atv_fisica?: string | null;
  pai_cpf?: string;
  pai_nome?: string;
  pai_rg?: string;
  pai_telefone?: string;
  parentesco_responsavel?: string;
  responsavel_cpf?: string;
  responsavel_rg?: string;
  responsavel_telefone?: string;
  rg?: string;
  sexo?: string;
}
