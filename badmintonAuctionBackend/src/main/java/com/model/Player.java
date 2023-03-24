package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "player")
public class Player {
    @Id
    @Column(name = "id")
    private int playerid;

    @Column(name = "playerName")
    private String playername;

    @Column(name = "skillLevel")
    private String skilllevel;


    @Column(name = "emailId")
    private String emailid;


    @Column(name = "tshirtSize")
    private String tshirtsize;

    public String getTshirtsize() {
        return tshirtsize;
    }


    public void setTshirtsize(String tshirtsize) {
        this.tshirtsize = tshirtsize;
    }

    public int getPlayerid() {
        return playerid;
    }

    public void setPlayerid(int playerid) {
        this.playerid = playerid;
    }

    public String getPlayername() {
        return playername;
    }

    public void setPlayername(String playername) {
        this.playername = playername;
    }

    public String getSkilllevel() {
        return skilllevel;
    }

    public void setSkilllevel(String skilllevel) {
        this.skilllevel = skilllevel;
    }


    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    @Override
    public String toString() {
        return "Player{" +
                "playerid=" + playerid +
                ", playername='" + playername + '\'' +
                ", skilllevel='" + skilllevel + '\'' +
                ", emailid='" + emailid + '\'' +
                ", tshirtsize='" + tshirtsize + '\'' +
                '}';
    }

}
