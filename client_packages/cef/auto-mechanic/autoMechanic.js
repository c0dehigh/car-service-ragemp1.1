let browser = mp.browsers.new("package://cef/auto-mechanic/index.html");
browser.active = false;



mp.events.add('autoCar', (car) => {
    browser.active = true;
    car.freezePosition(true);
    mp.gui.cursor.show(true, true);
    
    
    });


    mp.events.add('closeBrowser', () => {
        const localPlayer = mp.players.local;
        car = localPlayer.vehicle
        browser.active = false;
        car.freezePosition(false);
        mp.gui.cursor.show(false, false);
        
        
        });


        mp.events.add('cleanCar', () => {
            const localPlayer = mp.players.local;
            car = localPlayer.vehicle
            let newMoney = undefined
               
            let money = localPlayer.getMoney();
            if(money >= 300){
                newMoney = money - 300
                localPlayer.setMoney(newMoney);
                car.setDirtLevel(0);
                mp.game.graphics.notify('~w~successful');
            } else {
                mp.game.graphics.notify('~g~not enough  ~w~Money');
            }
            
            
            });

            mp.events.add('fixCar', () => {
                const localPlayer = mp.players.local;
                car = localPlayer.vehicle
                let newMoney1 = undefined
                let money = localPlayer.getMoney();
                if(money >= 1000){
                    newMoney1 = money - 1000
                    localPlayer.setMoney(newMoney1);
                    mp.events.callRemote('washCar',[car]);
                    mp.game.graphics.notify('~w~successful');
                } else {
                    mp.game.graphics.notify('~g~not enough  ~w~Money');
                }

                
                
                });


               


            