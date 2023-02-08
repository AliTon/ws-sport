import * as WebSocket from 'websocket'
import { IMessageEvent } from 'websocket'

class SportSocket {
    private socket: WebSocket.w3cwebsocket | null = null
    rid: string
    url: string
    pingInterVal = 0
    onGettingMatches: any
    constructor(rid: string) {
        this.rid = rid
        // TEST
        this.url = 'wss://mob.blue-version.com/hub/ws-sport'
        // REAL
        // this.url = 'wss://sport.funexx.com/hub/ws-sport?s=ls'
        // this.initialStateCb = initialStateCb
        // this.updateStateCb = updateStateCb
        this.init()
    }

    sendData<T>(data: T) {
        this.socket?.send(JSON.stringify({ ...data, rid: this.rid }))
    }

    initConnection() {
        this.sendData({
            cmd: 'init',
            params: {
                device: 'desktop',
                language: 'en-GB',
            },
        })
    }

    ping() {
        this.sendData({
            cmd: 'ping',
        })
    }

    getActiveGames() {
        this.sendData({
            cmd: 'get',
            params: {
                channel: 'active',
                label: 'live games',
                subscribe: true,
                what: {
                    game: [
                        '_id',
                        'date',
                        'home',
                        'away',
                        'status',
                        'markets_count',
                    ],
                    match_info: [
                        'score',
                        'scores',
                        'game_score',
                        'server',
                        'time',
                    ],
                    region: ['id', 'alias', 'name', 'order'],
                    sport: ['id', 'alias', 'name', 'order'],
                    tournament: ['id', 'alias', 'name', 'order'],
                },
                where: {
                    game: {
                        active: true,
                        feed: 'live',
                    },
                },
            },
        })
    }

    init(): void {
        this.socket = new WebSocket.w3cwebsocket(this.url)

        this.socket.onopen = () => {
            console.log('WebSocket connection established')
            this.initConnection()
            this.pingInterVal = setInterval(
                () => this.ping(),
                10000
            ) as unknown as number
            this.getActiveGames()
        }

        this.socket.onclose = () => {
            clearInterval(this.pingInterVal)
            console.log('WebSocket connection closed')
        }

        this.socket.onmessage = (message) => {
            this.onMessage(message)
        }
    }

    onMessage(message: IMessageEvent) {
        const { data } = JSON.parse(message.data as unknown as string)

        // We get message about pong or session(init)
        if (data === 'pong' || data.session) return;

        // It's mean that we are getting initial state for matches
        if (data.sid) {
            this.onGettingMatches?.(data.data)
            return
        }

        // console.log(JSON.stringify(data))

        // this.updateStateCb(data)
    }
}

export default SportSocket
