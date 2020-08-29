class GameUI{
    Team_1:Team;
    Team_2:Team;
    Team_1_Score:HTMLHeadingElement;
    Team_2_Score:HTMLHeadingElement;
    Timer:HTMLHeadingElement;
    Team_1_Hit:HTMLButtonElement;
    Team_2_Hit:HTMLButtonElement;
    ResultGenerate:HTMLButtonElement;
    currentTurn:string;
    Timer_time:number;
    currentPlayer:number;
    intervalTrack:any;
    container:HTMLDivElement;
    Team_Won:number;

    constructor(teamName_1:string, teamName_2:string){
        this.Team_1 = new Team(teamName_1);
        this.Team_2 = new Team(teamName_2);
        this.currentTurn = teamName_1;
        this.Timer_time = 60;
        this.currentPlayer = -1;
        this.Team_Won = -1;
        //------------------------------------------------------------------------------
        this.container = <HTMLDivElement>document.createElement('div');
        this.container.setAttribute('class', 'container');
        let h4 = <HTMLHeadingElement>document.createElement('h3');
        h4.innerText = "CRICKET 10";
        let hr_1 = <HTMLHRElement>document.createElement('hr');
        //------------------------------------------------------------------------------
        let row = <HTMLDivElement>document.createElement('div');
        row.setAttribute("class", 'row');
        //------------------------------------------------------------------------------
        let col_5_1 = <HTMLDivElement>document.createElement('div');
        col_5_1.setAttribute("class", 'col-5');
        let h5_1 = <HTMLHeadingElement>document.createElement('h5');
        h5_1.innerText = `${this.Team_1.name} SCORE`;
        this.Team_1_Score = <HTMLHeadingElement>document.createElement('h5');
        this.Team_1_Score.innerText = "0";
        this.Team_1_Hit = <HTMLButtonElement>document.createElement('button');
        this.Team_1_Hit.setAttribute('class', "btn btn-primary");
        this.Team_1_Hit.setAttribute("style", "color: white");
        this.Team_1_Hit.id = 'hit-1';
        this.Team_1_Hit.disabled = true;
        this.Team_1_Hit.innerText = "HIT 1";
        col_5_1.append(h5_1, this.Team_1_Score, this.Team_1_Hit);
        //------------------------------------------------------------------------------
        let col_2_1 = <HTMLDivElement>document.createElement('div');
        col_2_1.setAttribute("class", 'col-2');
        let h5_T = <HTMLHeadingElement>document.createElement('h5');
        h5_T.innerText = "TIMER";
        this.Timer = <HTMLHeadingElement>document.createElement('h2');
        this.Timer.innerText = "60";
        col_2_1.append(h5_T, this.Timer);
        //------------------------------------------------------------------------------
        let col_5_2 = <HTMLDivElement>document.createElement('div');
        col_5_2.setAttribute("class", 'col-5');
        let h5_2 = <HTMLHeadingElement>document.createElement('h5');
        h5_2.innerText = `${this.Team_2.name} SCORE`;
        this.Team_2_Score = <HTMLHeadingElement>document.createElement('h5');
        this.Team_2_Score.innerText = "0";
        this.Team_2_Hit = <HTMLButtonElement>document.createElement('button');
        this.Team_2_Hit.setAttribute('class', "btn btn-primary");
        this.Team_2_Hit.setAttribute("style", "color: white");
        this.Team_2_Hit.id = 'hit-2';
        this.Team_2_Hit.disabled = true;
        this.Team_2_Hit.innerText = "HIT 2";
        col_5_2.append(h5_2, this.Team_2_Score, this.Team_2_Hit);
        //------------------------------------------------------------------------------
        row.append(col_5_1, col_2_1, col_5_2);
        //------------------------------------------------------------------------------
        let hr_2 = <HTMLHRElement>document.createElement('hr');

        this.ResultGenerate = <HTMLButtonElement>document.createElement('button');
        this.ResultGenerate.setAttribute('class', "btn btn-primary");
        this.ResultGenerate.setAttribute("style", "color: white");
        this.ResultGenerate.id = 'result';
        this.ResultGenerate.disabled = true;
        this.ResultGenerate.innerText = "Generate Result";
        //------------------------------------------------------------------------------
        let row_1 = <HTMLDivElement>document.createElement('div');
        row_1.setAttribute('class', 'row');
        let col_1_team1 = <HTMLDivElement>document.createElement('div');
        col_1_team1.setAttribute('class', 'col-md-10 col-lg-5');
        let table_1 = <HTMLTableElement>document.createElement('table');
        table_1.setAttribute('class', 'table');
        table_1.id = "table-1";
        let caption_1 = <HTMLTableCaptionElement>document.createElement('caption');
        caption_1.innerText = `${this.Team_1.name} SCORE BOARD`;
        table_1.append(caption_1);
        let tr_h = <HTMLTableRowElement>document.createElement('tr');
        tr_h.innerHTML = `
        <th  scope="col">TEAM A</th>
            <th scope="col">B1</th>
            <th scope="col">B2</th>
            <th scope="col">B3</th>
            <th scope="col">B4</th>
            <th scope="col">B5</th>
            <th scope="col">B6</th>
            <th scope="col">TOTAL</th>`;
        table_1.append(tr_h);
        for(let i=0;i<10;i++){
            table_1.append(this.Team_1.row[i]);
        }
        col_1_team1.append(table_1);
        //------------------------------------------------------------------------------
        let col_1_mid = <HTMLDivElement>document.createElement('div');
        col_1_mid.setAttribute('class', 'col-md-10  col-lg-2');
        col_1_mid.id = "mid_result";
        //------------------------------------------------------------------------------
        let col_1_team2 = <HTMLDivElement>document.createElement('div');
        col_1_team2.setAttribute('class', 'col-md-10 col-lg-5');
        let table_2 = <HTMLTableElement>document.createElement('table');
        table_2.setAttribute('class', 'table');
        table_2.id = "table-2";
        let caption_2 = <HTMLTableCaptionElement>document.createElement('caption');
        caption_2.innerText = `${this.Team_2.name} SCORE BOARD`;
        table_2.append(caption_2);
        let tr_h_2 = <HTMLTableRowElement>document.createElement('tr');
        tr_h_2.innerHTML = `
        <th  scope="col">TEAM A</th>
            <th scope="col">B1</th>
            <th scope="col">B2</th>
            <th scope="col">B3</th>
            <th scope="col">B4</th>
            <th scope="col">B5</th>
            <th scope="col">B6</th>
            <th scope="col">TOTAL</th>`;
        table_2.append(tr_h_2);
        for(let i=0;i<10;i++){
            table_2.append(this.Team_2.row[i]);
        }
        col_1_team2.append(table_2);
        row_1.append(col_1_team1, col_1_mid,col_1_team2);
        //------------------------------------------------------------------------------
        this.container.append(h4, hr_1, row, hr_2, this.ResultGenerate, row_1);
        document.body.append(this.container);

    }
    start(){
        if(this.currentTurn == this.Team_1.name){
            this.Team_1_Hit.disabled = false;
            this.currentPlayer = 0;
            this.intervalTrack = setInterval(()=>{
                if(--this.Timer_time == 0){
                    clearInterval(this.intervalTrack);
                    this.Team_1_Hit.disabled = true;
                    this.currentTurn = this.Team_2.name;
                    this.Timer_time = 60;
                    this.start();
                    
                }
                this.Timer.innerText = String(this.Timer_time);
            }, 1000);
            console.log("ClearInterval Id", this.intervalTrack)

        }
        else if(this.currentTurn == this.Team_2.name){
            this.Team_2_Hit.disabled = false;
            this.currentPlayer = 0;
            this.intervalTrack = setInterval(()=>{
                if(--this.Timer_time == 0){
                    clearInterval(this.intervalTrack);
                    this.Team_2_Hit.disabled = true;
                    this.ResultGenerate.disabled = false;
                }
                this.Timer.innerText = String(this.Timer_time);
            }, 1000);
            console.log("ClearInterval Id", this.intervalTrack)
        }
    }
}

class Team{
    players:Player[]  = [];
    row:HTMLTableRowElement[] = [];
    name:string;
    score:number = 0;
    constructor(name:string){
        this.name = name;
        for(let i=0;i<10;i++){
            this.players.push(new Player(i+1));
            let row = <HTMLTableRowElement>document.createElement('tr');
            let th = <HTMLTableHeaderCellElement>document.createElement('th');
            th.setAttribute('scope', "row");
            th.innerText = `Player-${i+1}`;
            row.append(th);
            for(let j=1;j<=7;j++){
                let td = <HTMLTableDataCellElement>document.createElement('td');
                td.innerText = "\n";
                row.append(td);
            }
            this.row.push(row);
        }
    }
}

class Player{
    balls:Ball[] = [];
    name:string;
    score:number = 0;
    constructor(Num:number){
        this.name = "Player-"+Num;
    }
}

class Ball{
    score:string;
    constructor(score:string){
        this.score = score;
    }
}

let ui = new GameUI("TEAM - A", "TEAM - B");
ui.start();
(<HTMLButtonElement>document.getElementById('hit-1'))?.addEventListener('click', function(){
    let score = Math.floor((Math.random()*100)%7);
    ui.Team_1.players[ui.currentPlayer].balls.push(new Ball(String(score)));
    ui.Team_1_Score.innerText = String(+ui.Team_1_Score.innerText+score);
    ui.Team_1.score+=score;
    (<HTMLTableDataCellElement>ui.Team_1.row[ui.currentPlayer].children[ui.Team_1.players[ui.currentPlayer].balls.length]).innerText = String(score);
    ui.Team_1.players[ui.currentPlayer].score += score;
    if(ui.Team_1.players[ui.currentPlayer].balls.length == 6 || score == 0){
        ui.currentPlayer++;
    }
    if(ui.currentPlayer == 10){
        clearInterval(ui.intervalTrack);
        ui.Team_1_Hit.disabled = true;
        ui.currentTurn = ui.Team_2.name;
        ui.Timer_time = 60;
        ui.start();
    }
});

(<HTMLButtonElement>document.getElementById('hit-2'))?.addEventListener('click', function(){
    let score = Math.floor((Math.random()*100)%7);
    ui.Team_2.players[ui.currentPlayer].balls.push(new Ball(String(score)));
    ui.Team_2_Score.innerText = String(+ui.Team_2_Score.innerText+score);
    ui.Team_2.score+=score;
    (<HTMLTableDataCellElement>ui.Team_2.row[ui.currentPlayer].children[ui.Team_2.players[ui.currentPlayer].balls.length]).innerText = String(score);
    ui.Team_2.players[ui.currentPlayer].score += score;
    if(ui.Team_2.players[ui.currentPlayer].balls.length == 6 || score == 0){
        ui.currentPlayer++;
    }
    if(ui.currentPlayer == 10){
        clearInterval(ui.intervalTrack);
        ui.Team_2_Hit.disabled = true;
        ui.ResultGenerate.disabled = false;
    }
});

(<HTMLButtonElement>document.getElementById('result'))?.addEventListener('click', function(){
    let resultWindow:any = window.open('result.html', '_blank');
    resultWindow.onload = ()=>{
        let temp=ui.container.cloneNode(true);
        resultWindow.document.body.append(temp);
        let table_1 = resultWindow.document.getElementById('table-1');
        let table_2 = resultWindow.document.getElementById('table-2');
        let mid = resultWindow.document.getElementById('mid_result');
        let won_id = 0;
        if(ui.Team_1.score>ui.Team_2.score){
            ui.Team_Won = 1;
        }
        else{
            ui.Team_Won = 2;
        }
        for(let i=0;i<10;i++){
            table_1.children[i+2].children[7].innerText = ui.Team_1.players[i].score;
            table_2.children[i+2].children[7].innerText = ui.Team_2.players[i].score;
            if(ui.Team_Won == 1){
                if(ui.Team_1.players[won_id].score<ui.Team_1.players[i].score){
                    won_id = i;
                }
            }
            else{
                if(ui.Team_2.players[won_id].score<ui.Team_2.players[i].score){
                    won_id = i;
                }
            }
        }
        if(ui.Team_Won == 1){
            mid.innerHTML+=`<h6>MATCH WON BY ${ui.Team_1.name}</h6><hr>
            <h6>MAN OF THE MATCH</h6>
            <h6>${ui.Team_1.players[won_id].name}</h6>
            <h6>${ui.Team_1.name}</h6>
            <h6>SCORE:${ui.Team_1.players[won_id].score}</h6><hr>
            `;
        }
        else{
            mid.innerHTML+=`<h6>MATCH WON BY ${ui.Team_2.name}</h6><hr>
            <h6>MAN OF THE MATCH</h6>
            <h6>${ui.Team_2.players[won_id].name}</h6>
            <h6>${ui.Team_2.name}</h6>
            <h6>SCORE:${ui.Team_2.players[won_id].score}</h6><hr>
            `;
        }
    }
});