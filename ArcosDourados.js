class lanche{

    variedades(McLancheAlegre, BigLanche, ComboBigLanche, McHen, ComboMcHen){

    this.McLancheAlegre = McLancheAlegre;
    this.BigLanche = BigLanche;
    this.ComboBigLanche = ComboBigLanche;
    this.McHen = McHen;
    this.ComboMcHen = ComboMcHen;
    this.vendas = 0
    }

    vender(McLancheAlegre, BigLanche, ComboBigLanche, McHen, ComboMcHen, vendas){

    if(McLancheAlegre === true){
        vendas = vendas + 1
        const McLancheAlegre = "McLanche Alegre + batata pequena + fruta"
    }

    else if(BigLanche === true){
        vendas = vendas + 1
        const BigLanche = "BigLanche (dois hambúrgueres, alface, queijo, molho bacana, cebola, picles e pão)"
    }

    else if(ComboBigLanche === true){
        vendas = vendas + 1
        const ComboBigLanche = "BigLanche + batata média + bebida"
    }

    else if(McHen === true){
        vendas = vendas + 1
        const McHen = "McHen (hambúrguer de frango, alface, queijo e picles)"
    }

    else if(ComboMcHen === true){
        vendas = vendas + 1
        const ComboMcHen = "McHen + batata média + bebida"
    }

    else{
        console.log("Nenhuma venda foi executada")
    }
}
}