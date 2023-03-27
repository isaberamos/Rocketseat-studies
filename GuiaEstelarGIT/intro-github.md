## GitHub

## Requisitos para o curso e revisão de Git

Um dos requisitos que precisaremos para entender o curso é ter visto a parte de "Ambiente dev de outro mundo" do discover e também vai precisar do guia de Git.
De começo vamos revisar rapidamente algumas coisas sobre o curso de Git e ver qual o fluxo que teremos aqui e também veremos algumas palavras a mais que teremos no curso.
Abrindo o terminal, faremos um novo diretório com o comando mkdir, no caso colocaremos o nome de "revisao", após criarmos, entraremos no nele usando o comando cd revisao , manualmente seria come se estivéssemos criando uma pasta, colocando o nome e entrando nela, mas para nós é melhor controlar o computador via texto, com isso estamos já treinando a usar mais o terminal.

Ainda no terminal damos um git init para iniciarmos o repositório, será onde iremos guardar as modificações do nosso código, feito isso eu teria como criar um arquivo de texto usando o "vim" digitando: vim [README.md](http://readme.md) , apertaremos a letra I para inserir algo, md é uma extensão de Markdown , podemos alguns códigos específicos, podendo até usar alguns HTMLs. Daremos então Esc :wq, para sair, lembrando que isso é um comando do vim.

Agora se dermos um git status , podemos ver que estamos em uma branch master, ou seja, ramificação master, também que não há commits, os arquivos que não estão sendo rastreados, lembrando do processo do Git, ele está na nossa working area local e temos de passar o arquivo para nosa stage area, onde ele estará preparado para que possamos criar o commit.
E agora precisamos fazer mais dois processos, o primeiro sendo git add . para adicionar todas as nossas modificações e o git commit -m "first commit" , feito isso fizemos todo o processo de criar um ponto na história.

Depois disso, agora algo que vamos aprender é dar um git push para enviar ao GitHub até o nosso repositório, assim que linkarmos nossa máquina a máquina do GitHub, e git pull para trazer alterações lá da nuvem, ou também git clone para trazer um repositório novo até a nossa máquina através do Git.

## Criando chave SSH

O que é uma chave SSH?

É uma espécie de conexão que temos que fazer com a máquina e o servidores do GitHub, sendo encriptada, para identificarmos que nossa máquina pode usar o GitHub.

Para criarmos, clicaremos na bolinha do usuário, ir na parte de configurações, e nela iremos até a opção SSH and GPG keys, mas antes vamos para o terminal.

Abrindo o terminal, no caso esse é o do macOS, digitamos ssh-keygen, para gerar a chave ,-t rsa, para dizer o tipo de encriptação, -b 4096, a força da encriptação, -C "maykrbrito@gmail.com", o email que estamos criando, isso tudo na mesma linha, dando enter ele vai pedir algumas coisas que não precisamos, apenas dando enter.

No windows precisaremos do Git instalado, ao instalar você terá um terminal diferente, que podemos criar a chave da mesma forma que no macOS.

Agora com a chave precisamos pegar ela para colocarmos ela no botão verde, ainda pelo terminal, damos um cd ~/.ssh/ , teremos algumas opções como id_rsa e id_rsa.pub, que é o que queremos, mas não conseguimos navegar, fazer um cd nele, mas conseguimos dar um cat para mostrar tudo que há no arquivo, dando enter, vamos copiar tudo desde o ssh até o .com e voltar ao GitHub, clicando no botão verde de nova chave, colocar um título e colar a chave e adicionar ela.

## Adicionando chaves ao gerenciador local SSH Agent

Para este passo, vamos abrir o navegador, entrando neste link https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key você será direcionado a uma página no GitHub que irá nos ajudar, lembrando que para que executemos este processo, precisamos saber que o windows funciona de uma forma diferente do que macOS e o linux, então por isso para cada processo há uma página diferente, para todos esses sistemas operacionais.

Para o windows é bem simples, abriremos o terminal, iniciaremos ssh agent no background digitando ou apenas copiando do link, depois colaremos a linha já no terminal diferente que já tem o Git, eval "$(ssh-agent -s)", então mostrará para você o processo que está sendo executado e depois apenas rodar esta linha no terminal, ssh-add ~/.ssh/id_rsa.
No mac há alguns processos a mais do que o windows, iremos começar com a mesma linha eval "$(ssh-agent -s)", irá mostrar novamente o processo executado, então daremos um .ssh/config, veremos que não tem, então precisaremos dar um vim para criar, vim ~/ .ssh/config, assim criamos o config, agora tudo que precisamos é copiar:

    Host *
        AddKeysToAgent yes
        UseKeychain yes
        IdentityFile ~/.ssh/id_rsa

Por fim copiaremos ssh-add -K ~/.ssh/id_rsa.

Pronto assim sua máquina está funcionando junto com a do GitHub.

## Modificando arquivos local e enviando para repositório remoto

Agora estaremos fazendo uma alteração, no terminal, acessamos o nosso arquivo README que fizemos na aula passada escrevendo vim[README.md](http://readme.md) , damos um enter e modificamos o que queremos, saindo dando um git status podemos ver que ele não foi colocado no stage area, precisamos colocar, mas como o arquivo já está sendo rastreado pelo git, não precisaremos fazer o git add . , faremos o git commit -am ":sparkles: changing readme" m sendo a mensagem e o a ele vai adicionar a modificação que não está na stage area automaticamente junto ao commit tudo em uma linha só, isso somente funcionaria caso você já tenha posto na stage area alguma vez. não vamos precisar fazer o git remote, pois a nuvem já existe, dando o git push não vamos precisar fazer o -u origin , porque estamos na branch main já que a branch já existe aqui para o git.

## Modificando arquivos remotos e puxando para repositório local

Se alterarmos o arquivo e dermos commit changes, estaríamos fazendo direto online, mas se fizermos um git log --oneline, veremos que está a faltar um commit, sendo que na nuvem há mais, como faremos para puxar alteração da nuvem para máquina é bem simples, apenas damos um git pull e só, e se vermos novamente estará atualizada.

## Entendendo o histórico remoto

O histórico funciona da seguinte forma, se formos para um dos repositórios e clicarmos em commits com o sinal de relógio poderemos ver o histórico de modificações, podemos navegar por todos os pontos da história, ou seja clicando no ultimo ícone, vemos que o repositório que está sendo mostrado é o do momento da modificação, mas como faço para voltar é bem simples, mudamos a branch para main.

## Corrigindo conflitos de merge

Agora forçaremos um erro para criarmos uma situação, vamos supor que nós tenhamos feito uma alteração no repositório e demos commit apenas na nuvem e esquecemos de dar git pull e quando chegamos em casa, nós fazemos uma alteração no local, quando formos dar um git pull vai mostrar que deu erro, se abrirmos pelo vim[README.md](http://readme.md) , poderemos ver que é possível escolher entre a alteração local e pela remota, e para fazermos isso apenas apagamos a cabeça, os ====== e os >>>>>> e dizemos qual alteração que queremos, mas existe outro modo usando o VSCode, abrindo ele, no terminal damos um open . e colocamos ele no VSCode, ele automaticamente irá perceber o conflito e irá lhe dar certas opções, como a de aceitar as alterações locais ou as da nuvem, aceitando qualquer uma automaticamente o VSCode vai alterar de acordo com a escolha, então damos um git commit -am "mensagem" , agora o git pull e depois por fim o git push, atualizando vemos as alterações no GitHub.

## Estrelas e git clone

Pesquisando algo do seu interesse pelo GitHub todo, e entrando naquilo, para trazer até a máquina podemos fazer um fork ou dar uma estrelinha, para caso queira ver o repositório depois.

Para fazer um clone clicamos no botão Code, lá clicamos no SSH e copiamos a primeira opção, abrimos o terminal e damos um git clone e colamos, damos enter, assim trazemos o repositório direto para máquina, ao invés do fork que apenas traz para o GitHub, ou a estrela que é como se fosse um like, podendo ver mais tarde.

ainda no terminal podemos dar um ls , e depois o cd nome do repositório , se dermos git log --oneline, poderemos ver todo o projeto para estudar e etc.

No caso das estrelinhas apenas vamos no nosso perfil e clicamos na estrela, lá vai ter o que você marcou, fork faria mais sentido caso estivéssemos contribuindo, como não é apenas a estrela é o suficiente.