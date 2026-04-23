export const DeleteUser = createAsyncThunk(
  "user/deleteAccount",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete("/api/v1/profile/delete");
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Delete failed");
    }
  }
);