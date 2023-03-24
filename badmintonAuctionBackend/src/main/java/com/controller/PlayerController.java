package com.controller;

import com.model.Player;
import org.slf4j.Logger;
import com.services.PlayersDetails;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping(value = "/player")
public class PlayerController {
    @Autowired
    PlayersDetails playersDetails;
    private static final Logger logger = LoggerFactory.getLogger(PlayerController.class);

    @GetMapping("/display")
    public List<Player> getPlayersName(){
        logger.info("Players List");
        return playersDetails.getPlayersName();
    }

    @PostMapping("/create")
    public Player createPlayer(@RequestBody Player player){
        logger.info("Create Player is invoked {}",player);
        return playersDetails.create(player);
    }

    @GetMapping("/{id}")
    public Player getPlayerById(@PathVariable("id") int id){
        logger.info("getPlayerById is invoked with Player Id: {}", id);
        return playersDetails.getPlayerById(id);
    }
    @PutMapping("/update")
    public Player updatePlayer(@RequestBody Player player){
        return playersDetails.updatePlayer(player);
    }

    @DeleteMapping("/{id}")
    public Player deletePlayerId(@PathVariable("id") int id){
        return playersDetails.deletePlayerById(id);
    }
}
