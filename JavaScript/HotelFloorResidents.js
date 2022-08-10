function roomMates(rooms, floor){
    return rooms.slice(0 + (floor - 1) * 6, floor * 6).filter(x => x);
}  