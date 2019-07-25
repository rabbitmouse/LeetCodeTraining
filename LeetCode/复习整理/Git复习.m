/*
Git 结构
    工作区——写代码
        git add 
    暂存区——临时存储
        git commit
    本地库——历史版本
*/

/*
Git和代码托管中心——维护远程库
    局域网
        GitLab
    外网
        GitHub
        码云
*/

/*
    本地和远程库
        项目级别
        git config user.name xxx
        git config user.email xxx@xx.com
        系统级别
        git config --global user.name xxx
        git config --global user.email xxx@xx.com
*/

/*
添加提交
    git add [file name]
        添加到暂存区
    git commit -m "nessage" [file name]
        将暂存区内容提交到本地库
查看状态
    git status
        查看工作区，暂存区状态
*/

/*
版本记录
    git log :完整形式显示
    git log --pretty=onelone : 一行方式显示
    git reflog : head指针带有移动步数
*/

/*
版本的前进后退 —— 移动head指针
    1.基于索引值
        git reset --hard 7csd82a
    2.基于^符号：只能后退
        git reset --hard HEAD^ （一个^符号回退一个版本）
    3.基于~符号：只能后退
        git reset --hard HEAD~3 (~后是多少就回退多少)

    --hard: 
        本地库移动head指针
        重置暂存区
        重置工作区
    --soft: 
        仅仅是在本地库移动head指针
    --mixed: 
        本地库移动head指针 
        重置暂存区
*/

/*
删除文件并找回
    前提：删除前，文件存在时状态提交到了本地库
    操作：git reset --hard [指针位置]
*/

/*
比较差异
    git diff [file]：工作区与暂存区比较
    git diff HEAD [指针位置] 工作区与本地库比较
*/

/*
分支操作
    创建分支
        git branch [分支名]
    查看分支
        git branch -v
    切换分支
        git checkout [分支名]
    合并分支
        1.切换到接受修改的分支上[被合并的分支]
        2.git merge [branch name]
    解决冲突
        1.自己决定具体内容
        2.git add [文件名]
        3.git commit -m [日志信息]
            此时commit不能带文件名
*/

/*
远程库操作
    查看远程库
        git remote -v
    远程库起别名
        git remote add [origin] https://xxxx/xx.git
    推送到远程库
        git push origin master
                远程库别名 分支
    拉取远程库
        拉取远程库
            git fetch origin master
        合并下载的内容
            git merage origin/master
        pull = fetch + merge
            git pull origin master
    解决冲突
        1. pull 远端数据
        2. 解决冲突
        3. 重新提交
*/