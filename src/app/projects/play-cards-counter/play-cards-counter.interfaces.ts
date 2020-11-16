export interface IPlayer {
    name: string;
    scores: number[];
    score: number;
}

export interface IScoreMenu {
    scoreRankType: string;
    maxScore: number;
    highlightLastPlayer?: boolean;
    highlightLostPlayer?: boolean;
    highlightTopFirstPlayer?: boolean;
}