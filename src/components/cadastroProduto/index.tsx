import  { useState } from "react";
import { Container, Typography, Grid, TextField, Button, } from "@mui/material";
import axios from 'axios';


const CadastroProduto = () => {
  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    preco: 0,
    qntEstoque: 0,
    categoria: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const cadastrarProduto = async () => {
    try {
      // Enviar os dados do produto para o servidor
      const response = await axios.post('/cadastroprodutos', produto);
      console.log('Produto cadastrado com sucesso:', response.data);

      // Limpar o formulário após o cadastro bem-sucedido, se necessário
      setProduto({
        nome: '',
        descricao: '',
        preco: 0,
        qntEstoque: 0,
        categoria: '',
      });
    } catch (error) {
      console.error('Erro ao cadastrar o produto:', error);
    }
  };


  return (
    <Container maxWidth="lg">
      <form>
        <Typography variant="h4" component="h1" align="center">
          Cadastro de Produto
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome"
              name="nome"
              variant="outlined"
              value={produto.nome}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Descrição"
              name="descricao"
              variant="outlined"
              value={produto.descricao}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Preço"
              name="preco"
              variant="outlined"
              type="number"
              value={produto.preco}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Quantidade no Estoque"
              name="qntEstoque"
              variant="outlined"
              type="number"
              value={produto.qntEstoque}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Categoria"
              name="categoria"
              variant="outlined"
              value={produto.categoria}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <a href="/cadastroprodutos" style={{ textDecoration: 'none' }}>
        <Button type="submit" variant="contained" color="primary" fullWidth size="large" onClick={cadastrarProduto}>
          Cadastrar Produto
        </Button>
        </a>
      </form>
    </Container>
  );
};

export default CadastroProduto;

