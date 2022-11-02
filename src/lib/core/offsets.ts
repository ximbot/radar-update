//updates 19th oct (hyperion removed)
//fully updated 10/10
export const offsets = {
  button: {
    inSpeed: 0x0763f998,               // [Buttons]                        -> in_speed
    inAttack: 0x0763f9f0               // [Buttons]                        -> in_attack
  },
  core: {
    levelName: BigInt(0x1431a28),     // [Miscellaneous]                  -> LevelName
    clEntityList: BigInt(0x1b0d678),  // [Miscellaneous]                  -> cl_entitylist
    localPlayer: BigInt(0x1ebe3e8)    // [Miscellaneous]                  -> LocalPlayer
  },
  entity: {
    localOrigin: 0x0158,               // [DataMap.CBaseViewModel]         -> m_localOrigin
    iSignifierName: 0x0580,            // [RecvTable.DT_BaseEntity]        -> m_iSignifierName
    lastVisibleTime: 0x1a70           // [Miscellaneous]                  -> CPlayer!lastVisibleTime
  },
  item: {
    highlightFunctionBits: 0x02c0,     // [RecvTable.DT_HighlightSettings] -> m_highlightFunctionBits
    customScriptInt: 0x1648           // [RecvTable.DT_PropSurvival]      -> m_customScriptInt
  },
  player: {
    glowEnable: 0x03c0 + 0x8,                // [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x8
    glowThroughWall: 0x03c0 + 0x10,           // [RecvTable.DT_HighlightSettings] -> m_highlightServerContextID + 0x10
    iTeamNum: 0x044c,                  // [RecvTable.DT_BaseEntity]        -> m_iTeamNum
    iName: 0x0589,                     // [RecvTable.DT_BaseEntity]        -> m_iName
    lifeState: 0x0798,                 // [RecvTable.DT_Player]            -> m_lifeState
    vecPunchWeaponAngle: 0x2488,      // [DataMap.C_Player]               -> m_currentFrameLocalPlayer.m_vecPunchWeapon_Angle
    viewAngle: 0x2584 - 0x14,                // [DataMap.C_Player]        -> m_ammoPoolCapacity - 0x14
    bleedoutState: 0x2718             // [RecvTable.DT_Player]            -> m_bleedoutState
  }
};
