import * as readline from "node:readline";
import * as stream from "node:stream";

const rl: readline.ReadLine = readline.createInterface(new stream.Readable());

{
    const input: NodeJS.ReadableStream = new stream.Readable();
    const output: NodeJS.WritableStream = new stream.Writable();
    const syncCompleter: readline.Completer = function(str) {
        // $ExpectType string
        str;
        return [["test"], "test"];
    };
    const asyncCompleter: readline.AsyncCompleter = function(str, callback) {
        // $ExpectType string
        str;
        // $ExpectType (err?: Error | null | undefined, result?: CompleterResult | undefined) => void
        callback;
    };
    const terminal = false;

    let result: readline.ReadLine;

    result = readline.createInterface(input);
    result = readline.createInterface(input, output);
    result = readline.createInterface(input, output, syncCompleter);
    result = readline.createInterface(input, output, asyncCompleter);
    result = readline.createInterface(input, output, syncCompleter, terminal);
    result = readline.createInterface(input, output, asyncCompleter, terminal);

    result = readline.createInterface({ input });
    result = readline.createInterface({ input, output });
    result = readline.createInterface({ input, completer: syncCompleter });
    result = readline.createInterface({ input, completer: asyncCompleter });
    result = readline.createInterface({ input, terminal });
    result = readline.createInterface({ input, history: ["foo"] });
    result = readline.createInterface({ input, historySize: 20 });
    result = readline.createInterface({ input, removeHistoryDuplicates: true });
    result = readline.createInterface({ input, prompt: "prompt >" });
    result = readline.createInterface({ input, crlfDelay: 200 });
    result = readline.createInterface({ input, escapeCodeTimeout: 200 });
    result = readline.createInterface({ input, tabSize: 4 });
    result = readline.createInterface({ input, signal: new AbortSignal() });
}

{
    rl.setPrompt("prompt");
}

{
    rl.prompt();
    rl.prompt(true);
}

{
    rl.getPrompt(); // $ExpectType string
}

{
    rl.question("query", (answer: string) => {});
    rl.question("query", { signal: new AbortSignal() }, (answer: string) => {});
}

{
    let result: readline.ReadLine;

    result = rl.pause();
}

{
    let result: readline.ReadLine;

    result = rl.resume();
}

{
    rl.close();
}

{
    const data: string | Buffer = "asd";
    const key: readline.Key = {};

    rl.write(data);
    rl.write("asd", key);
}

{
    const data: string | Buffer = "test";
    rl.line; // $ExpectType string
    rl.cursor; // $ExpectType number

    rl.write(data);

    rl.line; // $ExpectType string
    rl.cursor; // $ExpectType number
}

{
    const data: undefined | null | string | Buffer = null;
    const key: readline.Key = { ctrl: true, name: "u" };

    rl.line; // $ExpectType string
    rl.cursor; // $ExpectType number

    rl.write(data, key);

    rl.line; // $ExpectType string
    rl.cursor; // $ExpectType number
}

{
    const strm: NodeJS.WritableStream = new stream.Writable();
    const x = 1;
    const y = 1;

    readline.cursorTo(strm, x);
    readline.cursorTo(strm, x, y);
    readline.cursorTo(strm, x, y, () => {}); // $ExpectType boolean
}

{
    const strm: NodeJS.ReadableStream = new stream.Readable();
    const readLineInterface: readline.ReadLine = readline.createInterface(new stream.Readable());

    readline.emitKeypressEvents(strm);
    readline.emitKeypressEvents(strm, readLineInterface);
}

{
    const strm: NodeJS.WritableStream = new stream.Writable();
    const dx: number | string = 1;
    const dy: number | string = 1;

    readline.moveCursor(strm, dx, dy);
    readline.moveCursor(strm, dx, dy, () => {}); // $ExpectType boolean
}

{
    const strm: NodeJS.WritableStream = new stream.Writable();
    readline.clearLine(strm, 1);
    readline.clearLine(strm, 1, () => {}); // $ExpectType boolean
}

{
    const strm: NodeJS.WritableStream = new stream.Writable();

    readline.clearScreenDown(strm);
    readline.clearScreenDown(strm, () => {}); // $ExpectType boolean
}

{
    let _rl = readline.createInterface({
        input: process.stdin,
    });
    let _boolean: boolean;

    _rl = _rl.addListener("close", () => {});
    _rl = _rl.addListener("line", (input) => {
        const _input: string = input;
    });
    _rl = _rl.addListener("pause", () => {});
    _rl = _rl.addListener("resume", () => {});
    _rl = _rl.addListener("SIGCONT", () => {});
    _rl = _rl.addListener("SIGINT", () => {});
    _rl = _rl.addListener("SIGTSTP", () => {});
    _rl = _rl.addListener("history", (history) => {
        const _input: string[] = history;
    });

    _boolean = _rl.emit("close");
    _boolean = _rl.emit("line");
    _boolean = _rl.emit("pause");
    _boolean = _rl.emit("resume");
    _boolean = _rl.emit("SIGCONT");
    _boolean = _rl.emit("SIGINT");
    _boolean = _rl.emit("SIGTSTP");
    _boolean = _rl.emit("history");

    _rl = _rl.on("close", () => {});
    _rl = _rl.on("line", (input) => {
        const _input: string = input;
    });
    _rl = _rl.on("pause", () => {});
    _rl = _rl.on("resume", () => {});
    _rl = _rl.on("SIGCONT", () => {});
    _rl = _rl.on("SIGINT", () => {});
    _rl = _rl.on("SIGTSTP", () => {});
    _rl = _rl.on("history", (history) => {
        const _input: string[] = history;
    });

    _rl = _rl.once("close", () => {});
    _rl = _rl.once("line", (input) => {
        const _input: string = input;
    });
    _rl = _rl.once("pause", () => {});
    _rl = _rl.once("resume", () => {});
    _rl = _rl.once("SIGCONT", () => {});
    _rl = _rl.once("SIGINT", () => {});
    _rl = _rl.once("SIGTSTP", () => {});
    _rl = _rl.once("history", (history) => {
        const _input: string[] = history;
    });

    _rl = _rl.prependListener("close", () => {});
    _rl = _rl.prependListener("line", (input) => {
        const _input: string = input;
    });
    _rl = _rl.prependListener("pause", () => {});
    _rl = _rl.prependListener("resume", () => {});
    _rl = _rl.prependListener("SIGCONT", () => {});
    _rl = _rl.prependListener("SIGINT", () => {});
    _rl = _rl.prependListener("SIGTSTP", () => {});
    _rl = _rl.prependListener("history", (history) => {
        const _input: string[] = history;
    });

    _rl = _rl.prependOnceListener("close", () => {});
    _rl = _rl.prependOnceListener("line", (input) => {
        const _input: string = input;
    });
    _rl = _rl.prependOnceListener("pause", () => {});
    _rl = _rl.prependOnceListener("resume", () => {});
    _rl = _rl.prependOnceListener("SIGCONT", () => {});
    _rl = _rl.prependOnceListener("SIGINT", () => {});
    _rl = _rl.prependOnceListener("SIGTSTP", () => {});
    _rl = _rl.prependOnceListener("history", (history) => {
        const _input: string[] = history;
    });
}

{
    (async () => {
        const result = readline.createInterface({
            input: process.stdin,
        });

        // tslint:disable-next-line: await-promise
        for await (const line of result) {
            line; // $ExpectType string
        }
    });
}

{
    const rl = readline.createInterface({
        input: process.stdin,
    });
    const pos: readline.CursorPos = rl.getCursorPos();
}
