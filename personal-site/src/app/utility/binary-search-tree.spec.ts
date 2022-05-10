import {buildQuoteTree, QuoteGalleryGreedyAlgorithm} from "./binary-search-tree";
import {QuoteService} from "../quote.service";
import assert from "assert";
import {buildQuoteTrie} from "./quote-trie";

let quoteService;
let quotes;
beforeAll(() => {
  quoteService  = new QuoteService();
  quotes = quoteService.quotes;
});

describe('quote tree', () => {
  it('should build the quote tree successfully', () => {
    const treeRoot = buildQuoteTree(quotes);
    const algorithm = new QuoteGalleryGreedyAlgorithm();
    const totalCells = 120;
    const solvedQuotes = algorithm.solve(totalCells, treeRoot);
    let totalDimensions = 0;
    solvedQuotes.forEach(q => totalDimensions += q.cellsTakenUp);
    const [valid, cells] = algorithm.validateAnswer(totalDimensions, solvedQuotes);
    assert( valid === true && cells === totalCells);
  });
})
describe('quote trie', () => {
  it('should build successfully', () => {
    // const trieRoot =
    buildQuoteTrie();
  });
})
