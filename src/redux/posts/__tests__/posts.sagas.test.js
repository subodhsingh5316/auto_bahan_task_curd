import fetchAlbumsStartAsync from "../albums.sagas";
import { call } from "redux-saga/effects";
import { fetchAlbumsStart, fetchAlbumsSuccess } from "../albums.actions";

describe("getAlbums", () => {
  it("successfully triggers clear messages action after getting albums", () => {
    const generator = fetchAlbumsStartAsync();
    const albums = { name: "Wow" };
    const response = [albums];

    expect(generator.next().value).toEqual(call(fetchAlbumsStartAsync));

    expect(generator.next(response).value).toEqual(
      call(fetchAlbumsSuccess(Albums))
    );

    expect(generator.next().value).toEqual({ done: true, value: undefined });
  });
});
