import { describe, expect, it } from "vitest";
import { supabase } from "../../src/lib/supabase";

describe("Auth integration", () => {
  const email = "tester@exmaple.com";
  const password = "12345678t";
  const displayName = "Tester";
  it("should sign up a user", async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
        },
      },
    });
    expect(error).toBeNull();
    expect(data.user).not.toBeNull();
  });

  it("should sign in the user", async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    expect(error).toBeNull();
    expect(data.user).not.toBeNull();
    expect(data.session).not.toBeNull();
  });
});
