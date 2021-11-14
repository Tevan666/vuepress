---
sidebar: auto
---


## Git

### 创建仓库

创建一个空目录，windows目录名包括父目录最好不要包含中文。



### 将目录变成Git管理

**git init**

当前目录下多了一个`.git`的目录，这个目录是Git来跟踪管理版本库的，没事千万不要手动修改这个目录里面的文件，不然改乱了，就把Git仓库给破坏了。



### 将文件添加到仓库

1.文件放在仓库目录下(子目录也行)

2.git add 文件名  //添加到仓库，没有消息就是好消息

3.git commit -m "info"//把文件提交到仓库 参数`-m`后输入的是本次提交的说明。

`git commit`命令执行成功后会告诉你，`1 file changed`：1个文件被改动（我们新添加的文件）；`2 insertions`：插入了几行内容。



### git status

可以让我们时刻掌握仓库当前的状态，哪个文件有无被修改等。



### git diff

git diff 文件名

查看different，能看看具体修改了什么内容。



### git log

查看历史记录，显示从最近到最远的提交日志。

#### 参数--pretty=oneline以版本号显示



### git表示版本

在Git中，用`HEAD`表示当前版本，上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个`^`比较容易数不过来，所以写成`HEAD~100`。



### git reset

回退版本

git reset --hard HEAD^ //回退至上一个版本

git reset --hard 版本号 //回退至准确的版本，版本号写前几位就可以了



### git reflog

记录每一次命令

```
$ git reflog
e475afc HEAD@{1}: reset: moving to HEAD^
1094adb (HEAD -> master) HEAD@{2}: commit: append GPL
e475afc HEAD@{3}: commit: add distributed
eaadf4e HEAD@{4}: commit (initial): wrote a readme file
```



### 工作区

就是在电脑里能看到的目录。



### 暂存区stage

在git的版本库(工作区中的.git)中。

把文件往Git版本库里添加的时候，是分两步执行的：

第一步是用`git add`把文件添加进去，实际上就是把文件修改添加到暂存区；

第二步是用`git commit`提交更改，实际上就是把暂存区的所有内容提交到当前分支。



### git checkout -- 文件名

把文件在工作区的修改全部撤销，这里有两种情况：

一种是文件自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

**直接git checkout -- 文件名**

一种是文件已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。

1.**git reset HEAD  文件名**

可以把暂存区的修改撤销掉，重新放回工作区

2.**再进行git checkout -- 文件名**

总之，就是让这个文件回到最近一次`git commit`或`git add`时的状态。



### 删除文件

版本库删除文件

1.git rm 文件名

2.git commit

删错了就git checkout --文件名



### 远程库

由于你的本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，所以，需要一点设置：

第1步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有`id_rsa`和`id_rsa.pub`这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：

```
$ ssh-keygen -t rsa -C "youremail@example.com"
```

把邮件地址换成你自己的邮件地址，然后一路回车

如果一切顺利的话，可以在用户主目录里找到`.ssh`目录，里面有`id_rsa`和`id_rsa.pub`两个文件，这两个就是SSH Key的秘钥对，`id_rsa`是私钥，不能泄露出去，`id_rsa.pub`是公钥，可以放心地告诉任何人。

第2步：登陆GitHub，打开“Account settings”，“SSH Keys”页面：

然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴`id_rsa.pub`文件的内容：

点“Add Key”，你就应该看到已经添加的Key

#### 关联库

在本地仓库下运行

```
git remote add origin git@github.com:michaelliao/learngit.git
```

添加后，远程库的名字就是`origin`，这是Git默认的叫法

#### 推送内容

把本地库的内容推送到远程，用**git push**命令，实际上是把当前分支`master`推送到远程。

由于远程库是空的，第一次推送`master`分支时，加上`-u`参数，Git不但会把本地的`master`分支内容推送的远程新的`master`分支，还会把本地的`master`分支和远程的`master`分支关联起来，

#### 删除远程库

git remote rm name

此处的“删除”其实是解除了本地和远程的绑定关系，并不是物理上删除了远程库。远程库本身并没有任何改动。要真正删除远程库，需要登录到GitHub，在后台页面找到删除按钮再删除。

#### 从远程库克隆

```
git clone git@github.com:username/file.git
```



### 分支

#### 查看分支

git branch

命令会列出所有分支，当前分支前面会标一个`*`号。

#### 创建并切换到分支

git checkout -b name

`git checkout`命令加上`-b`参数表示创建并切换，相当于以下两条命令：

```
$ git branch dev
$ git checkout dev
Switched to branch 'dev'
```

#### 合并分支

git merge name

合并指定分支到当前分支。

#### 删除分支

git branch -d name

因为创建、合并和删除分支非常快，所以Git鼓励你使用分支完成某个任务，合并后再删掉分支，这和直接在`master`分支上工作效果是一样的，但过程更安全。

#### 切换分支(新版)

最新版本的Git提供了新的`git switch`命令来切换分支：

创建并切换到新的`dev`分支，可以使用：

```
$ git switch -c dev
```

直接切换到已有的`master`分支，可以使用：

```
$ git switch master
```



### 标签

#### 创建标签

切换到需要打标签的分支上：

```
$ git branch
* dev
  master
$ git checkout master
Switched to branch 'master'
```

然后，敲命令`git tag name`就可以打一个新标签：

```
$ git tag v1.0
```

默认标签是打在最新提交的commit上的。

```
$ git tag v0.9 f52c633 //对对应的提交打标签，使用commit id确认
```

可以用命令`git tag`查看所有标签，

标签不是按时间顺序列出，而是按字母排序的。

#### 操作标签

##### 删除本地标签

git tag -d v0.1 //v0.1标签被删除

##### 删除远程标签

先从本地删除：

```
$ git tag -d v0.9
Deleted tag 'v0.9' (was f52c633)
```

然后，从远程删除。删除命令也是push，但是格式如下：

```
$ git push origin :refs/tags/v0.9
To github.com:michaelliao/learngit.git
 - [deleted]         v0.9
```

##### 推送标签到远程

git push origin tagname

一次性推送全部尚未推送到远程的本地标签

git push origin --tags